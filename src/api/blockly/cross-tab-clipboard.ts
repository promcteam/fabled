import * as Blockly from 'blockly';

// Compact format: [blockType, fields, values, children]
export type CompactBlock = [string, {[key: string]: string}, {[key: string]: CompactBlock}, CompactBlock[]];

export interface ClipboardBlock {
	block: CompactBlock;
	timestamp: number;
	sourceWorkspaceId: string;
}

export class CrossTabClipboard {
	private static readonly STORAGE_KEY = 'fabled_blockly_clipboard';
	private static readonly MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours
	private static readonly CLIPBOARD_PREFIX = 'FABLED_BLOCK:';

	/**
	 * Copy the selected block to system clipboard (with localStorage fallback)
	 */
	static async copySelectedBlock(): Promise<boolean> {
		const selectedBlock = Blockly.getSelected();
		if (!selectedBlock || !(selectedBlock instanceof Blockly.BlockSvg)) {
			return false;
		}

		try {
			const compactBlock = this.blockToCompact(selectedBlock);
			
			console.debug('Block type:', selectedBlock.type);

			const clipboardData: ClipboardBlock = {
				block: compactBlock,
				timestamp: Date.now(),
				sourceWorkspaceId: selectedBlock.workspace.id
			};

			const serializedData = JSON.stringify(clipboardData);
			const encodedData = this.encodeToBase64(serializedData);
			
			console.debug('Serialized length:', serializedData.length);
			console.debug('Encoded length:', encodedData.length);

			const finalClipboardString = this.CLIPBOARD_PREFIX + encodedData;

			try {
				await this.copyToSystemClipboard(finalClipboardString);
				localStorage.setItem(this.STORAGE_KEY, encodedData);
				console.debug('Block copied to system clipboard');
			} catch (error) {
				localStorage.setItem(this.STORAGE_KEY, encodedData);
				console.debug('Block copied to localStorage only');
			}
			
			return true;
		} catch (error) {
			console.error('Failed to copy block:', error);
			return false;
		}
	}

	/**
	 * Paste block from system clipboard (with localStorage fallback) to the specified workspace
	 */
	static async pasteBlock(workspace: Blockly.WorkspaceSvg, onUpdate?: () => void): Promise<string | null> {
		try {
			let clipboardData = await this.getFromSystemClipboard();
			
			if (!clipboardData) {
				clipboardData = this.getFromLocalStorage();
				if (clipboardData) {
					console.debug('Using localStorage fallback for paste');
				}
			}
			
			if (!clipboardData) {
				console.debug('No clipboard data available');
				return null;
			}

			if (Date.now() - clipboardData.timestamp > this.MAX_AGE) {
				this.clearClipboard();
				console.debug('Clipboard data expired');
				return null;
			}

			const newBlock = this.compactToBlock(clipboardData.block, workspace);
			
			if (!newBlock) {
				console.debug('Failed to create block from clipboard data');
				return null;
			}

			newBlock.initSvg();
			newBlock.render();

			this.positionPastedBlock(newBlock, workspace);

			Blockly.common.setSelected(newBlock);

			onUpdate?.();

			console.debug('Block pasted successfully from clipboard');
			return newBlock.id;
		} catch (error) {
			console.error('Failed to paste block:', error);
			return null;
		}
	}

	/**
	 * Check if there's valid clipboard data available (prioritize system clipboard)
	 */
	static async hasClipboardData(): Promise<boolean> {
		// Check system clipboard first
		const systemData = await this.getFromSystemClipboard();
		if (systemData && (Date.now() - systemData.timestamp) <= this.MAX_AGE) {
			return true;
		}
		
		// Fallback to localStorage
		const localData = this.getFromLocalStorage();
		return localData !== null && (Date.now() - localData.timestamp) <= this.MAX_AGE;
	}

	/**
	 * Clear both system clipboard and localStorage
	 */
	static async clearClipboard(): Promise<void> {
		// Clear localStorage
		localStorage.removeItem(this.STORAGE_KEY);
		
		// Try to clear system clipboard (limited capability)
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText('');
			}
		} catch (error) {
			// Ignore clipboard clear errors
			console.debug('Could not clear system clipboard:', error);
		}
	}

	/**
	 * Get clipboard data from system clipboard
	 */
	private static async getFromSystemClipboard(): Promise<ClipboardBlock | null> {
		try {
			if (!navigator.clipboard || !window.isSecureContext) {
				return null;
			}

			const text = await navigator.clipboard.readText();
			if (!text || !text.startsWith(this.CLIPBOARD_PREFIX)) {
				return null;
			}

			// Extract base64 data after prefix
			const base64Data = text.substring(this.CLIPBOARD_PREFIX.length);
			
			// Decode the entire JSON data from base64
			const jsonData = this.decodeFromBase64(base64Data);
			
			return JSON.parse(jsonData) as ClipboardBlock;
		} catch (error) {
			console.debug('Failed to read from system clipboard:', error);
			return null;
		}
	}

	/**
	 * Get clipboard data from localStorage (fallback)
	 */
	private static getFromLocalStorage(): ClipboardBlock | null {
		try {
			const stored = localStorage.getItem(this.STORAGE_KEY);
			if (!stored) {
				return null;
			}
			
			// Decode the entire JSON data from base64 (localStorage also stores base64)
			const jsonData = this.decodeFromBase64(stored);
			
			return JSON.parse(jsonData) as ClipboardBlock;
		} catch {
			return null;
		}
	}

	/**
	 * Copy data to system clipboard
	 */
	private static async copyToSystemClipboard(data: string): Promise<boolean> {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(data);
				return true;
			} else {
				// Fallback for older browsers
				const textarea = document.createElement('textarea');
				textarea.value = data;
				textarea.style.position = 'fixed';
				textarea.style.opacity = '0';
				textarea.style.left = '-9999px';
				document.body.appendChild(textarea);
				textarea.select();
				const success = document.execCommand('copy');
				document.body.removeChild(textarea);
				return success;
			}
		} catch (error) {
			console.debug('Failed to copy to system clipboard:', error);
			return false;
		}
	}

	/**
	 * Position the pasted block appropriately
	 */
	private static positionPastedBlock(block: Blockly.BlockSvg, workspace: Blockly.WorkspaceSvg): void {
		const metrics = workspace.getMetrics();
		const blockSize = block.getHeightWidth();
		
		// Get current viewport center
		const centerX = metrics.viewLeft + (metrics.viewWidth / 2);
		const centerY = metrics.viewTop + (metrics.viewHeight / 2);
		
		// Offset slightly to avoid overlapping with existing blocks
		const offsetX = centerX - (blockSize.width / 2);
		const offsetY = centerY - (blockSize.height / 2);
		
		// Check if there are existing blocks at this position and offset if needed
		const topBlocks = workspace.getTopBlocks(true);
		let finalX = offsetX;
		let finalY = offsetY;
		
		for (const existingBlock of topBlocks) {
			const existingPos = existingBlock.getRelativeToSurfaceXY();
			const existingSize = existingBlock.getHeightWidth();
			
			// Check if positions overlap
			if (Math.abs(existingPos.x - finalX) < existingSize.width && 
				Math.abs(existingPos.y - finalY) < existingSize.height) {
				// Offset to avoid overlap
				finalX += 50;
				finalY += 50;
			}
		}
		
		block.moveBy(finalX, finalY);
		block.snapToGrid();
	}

	/**
	 * Get a preview of what's in the clipboard (for UI purposes)
	 */
	static async getClipboardPreview(): Promise<string | null> {
		let data = await this.getFromSystemClipboard();
		
		if (!data) {
			data = this.getFromLocalStorage();
		}
		
		if (!data) {
			return null;
		}

		try {
			const blockType = data.block[0];
			const timestamp = new Date(data.timestamp).toLocaleTimeString();
			
			return `${blockType} (copied at ${timestamp})`;
		} catch {
			return 'Invalid clipboard data';
		}
	}

	private static blockToCompact(block: Blockly.BlockSvg): CompactBlock {
		const fields: {[key: string]: string} = {};
		const values: {[key: string]: CompactBlock} = {};
		const children: CompactBlock[] = [];

		// Extract fields
		const fieldNames = block.inputList.flatMap(input => 
			input.fieldRow.map(field => field.name).filter(name => name)
		);
		
		for (const fieldName of fieldNames) {
			if (fieldName) {
				const field = block.getField(fieldName);
				if (field) {
					fields[fieldName] = field.getValue();
				}
			}
		}

		// Extract value inputs
		for (const input of block.inputList) {
			if (input.type === 1 && input.connection?.targetBlock()) { // 1 = VALUE input
				const targetBlock = input.connection.targetBlock() as Blockly.BlockSvg;
				values[input.name] = this.blockToCompact(targetBlock);
			}
		}

		// Extract next blocks
		let nextBlock = block.getNextBlock() as Blockly.BlockSvg;
		while (nextBlock) {
			children.push(this.blockToCompact(nextBlock));
			nextBlock = nextBlock.getNextBlock() as Blockly.BlockSvg;
		}

		return [block.type, fields, values, children];
	}

	private static compactToBlock(compact: CompactBlock, workspace: Blockly.WorkspaceSvg): Blockly.BlockSvg | null {
		const [blockType, fields, values, children] = compact;
		
		const block = workspace.newBlock(blockType) as Blockly.BlockSvg;
		if (!block) {
			return null;
		}

		// Set fields
		for (const [fieldName, value] of Object.entries(fields)) {
			const field = block.getField(fieldName);
			if (field) {
				field.setValue(value);
			}
		}

		// Set value inputs
		for (const [inputName, valueCompact] of Object.entries(values)) {
			const input = block.getInput(inputName);
			if (input && input.connection) {
				const valueBlock = this.compactToBlock(valueCompact, workspace);
				if (valueBlock) {
					input.connection.connect(valueBlock.outputConnection);
				}
			}
		}

		// Add next blocks
		let currentBlock = block;
		for (const childCompact of children) {
			const childBlock = this.compactToBlock(childCompact, workspace);
			if (childBlock && currentBlock.nextConnection) {
				currentBlock.nextConnection.connect(childBlock.previousConnection);
				currentBlock = childBlock;
			}
		}

		return block;
	}

	private static encodeToBase64(str: string): string {
		try {
			return btoa(unescape(encodeURIComponent(str)));
		} catch (error) {
			console.error('Failed to encode string to base64:', error);
			throw new Error('Base64 encoding failed');
		}
	}

	private static decodeFromBase64(base64Str: string): string {
		try {
			return decodeURIComponent(escape(atob(base64Str)));
		} catch (error) {
			console.error('Failed to decode base64 string:', error);
			throw new Error('Base64 decoding failed');
		}
	}
}
