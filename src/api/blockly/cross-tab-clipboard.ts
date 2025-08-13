import * as Blockly from 'blockly';

export interface ClipboardBlock {
	xml: string; // Plain XML string (entire clipboard data will be base64 encoded)
	timestamp: number;
	sourceWorkspaceId: string;
	extraState?: { [blockId: string]: any };
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
			// Convert block to XML including all children
			const blockXml = Blockly.Xml.blockToDom(selectedBlock);
			const xmlString = Blockly.Xml.domToText(blockXml);

			console.debug('Original XML length:', xmlString.length, 'characters');

			// Collect extra state from all blocks in the tree
			const extraState = this.collectExtraState(selectedBlock);

			// Create clipboard data (keep XML as plain text internally)
			const clipboardData: ClipboardBlock = {
				xml: xmlString, // Keep as plain text for internal processing
				timestamp: Date.now(),
				sourceWorkspaceId: selectedBlock.workspace.id,
				extraState: extraState
			};

			// Serialize the entire clipboard data
			const serializedData = JSON.stringify(clipboardData);
			
			// Encode the ENTIRE serialized data as base64
			const encodedData = this.encodeToBase64(serializedData);
			
			console.debug('Serialized data length:', serializedData.length, 'characters');
			console.debug('Base64 encoded data length:', encodedData.length, 'characters');

			// Add prefix to identify our clipboard format
			const finalClipboardString = this.CLIPBOARD_PREFIX + encodedData;

			// Primary: Copy to system clipboard
			try {
				await this.copyToSystemClipboard(finalClipboardString);
				// Also store original data in localStorage as fallback (but still base64 encoded)
				localStorage.setItem(this.STORAGE_KEY, encodedData);
				console.debug('Block copied to system clipboard (entire data base64 encoded)');
			} catch (error) {
				// Fallback: Only use localStorage (still base64 encoded)
				localStorage.setItem(this.STORAGE_KEY, encodedData);
				console.debug('Block copied to localStorage (entire data base64 encoded, clipboard unavailable)');
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
			// Primary: Try to get from system clipboard
			let clipboardData = await this.getFromSystemClipboard();
			
			// Fallback: Get from localStorage if system clipboard fails
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

			// Check if data is too old
			if (Date.now() - clipboardData.timestamp > this.MAX_AGE) {
				this.clearClipboard();
				console.debug('Clipboard data expired');
				return null;
			}

			// XML is now plain text, no need to decode
			const xmlString = clipboardData.xml;
			
			console.debug('Using XML string, length:', xmlString.length, 'characters');

			// Parse XML and create block (Blockly automatically handles extra state)
			const xmlDoc = Blockly.utils.xml.textToDom(xmlString);
			const newBlock = Blockly.Xml.domToBlock(xmlDoc, workspace) as Blockly.BlockSvg;
			
			if (!newBlock) {
				console.debug('Failed to create block from clipboard data');
				return null;
			}

			// Initialize and render the block
			newBlock.initSvg();
			newBlock.render();

			// Position the block
			this.positionPastedBlock(newBlock, workspace);

			// Restore extra state if available
			if (clipboardData.extraState) {
				this.restoreExtraState(newBlock, clipboardData.extraState);
			}

			// Select the new block
			Blockly.common.setSelected(newBlock);

			// Call update callback
			onUpdate?.();

			console.debug('Block pasted successfully from clipboard (base64 decoded)');
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
		// Try system clipboard first
		let data = await this.getFromSystemClipboard();
		
		// Fallback to localStorage
		if (!data) {
			data = this.getFromLocalStorage();
		}
		
		if (!data) {
			return null;
		}

		try {
			const xmlDoc = Blockly.utils.xml.textToDom(data.xml);
			const blockType = xmlDoc.getAttribute('type') || 'unknown';
			const timestamp = new Date(data.timestamp).toLocaleTimeString();
			
			return `${blockType} (copied at ${timestamp})`;
		} catch {
			return 'Invalid clipboard data';
		}
	}

	/**
	 * Collect extra state from a block and all its children
	 */
	private static collectExtraState(block: Blockly.BlockSvg): { [blockId: string]: any } {
		const extraState: { [blockId: string]: any } = {};
		
		const collectFromBlock = (b: Blockly.BlockSvg) => {
			// Save extra state if block has the method
			if (typeof (b as any).saveExtraState === 'function') {
				try {
					const state = (b as any).saveExtraState();
					if (state) {
						extraState[b.id] = state;
					}
				} catch (error) {
					console.warn('Failed to save extra state for block:', b.id, error);
				}
			}
			
			// Process child blocks
			const childBlocks = b.getChildren(false);
			childBlocks.forEach(collectFromBlock);
		};
		
		collectFromBlock(block);
		return extraState;
	}

	/**
	 * Restore extra state to a block and all its children
	 */
	private static restoreExtraState(block: Blockly.BlockSvg, extraStateMap: { [blockId: string]: any }): void {
		const restoreToBlock = (b: Blockly.BlockSvg, originalId?: string) => {
			// Try to find matching state
			let state = null;
			
			// First try with original ID if provided
			if (originalId && extraStateMap[originalId]) {
				state = extraStateMap[originalId];
			}
			
			// If no original ID or state not found, try to match by type and position
			if (!state) {
				const matchingStates = Object.entries(extraStateMap).filter(([id, stateData]) => {
					// Simple heuristic: match by block type
					return stateData && typeof stateData === 'object';
				});
				
				if (matchingStates.length > 0) {
					// Use the first matching state (could be improved with better matching logic)
					state = matchingStates[0][1];
					// Remove used state to avoid reusing
					delete extraStateMap[matchingStates[0][0]];
				}
			}
			
			// Load state if found and block supports it
			if (state && typeof (b as any).loadExtraState === 'function') {
				try {
					(b as any).loadExtraState(state);
				} catch (error) {
					console.warn('Failed to load extra state for block:', b.id, error);
				}
			}
			
			// Process child blocks
			const childBlocks = b.getChildren(false);
			childBlocks.forEach(child => restoreToBlock(child));
		};
		
		restoreToBlock(block);
	}

	/**
	 * Safely encode a string to base64, handling Unicode characters
	 */
	private static encodeToBase64(str: string): string {
		try {
			// Handle Unicode characters properly by first encoding to UTF-8
			return btoa(unescape(encodeURIComponent(str)));
		} catch (error) {
			console.error('Failed to encode string to base64:', error);
			throw new Error('Base64 encoding failed');
		}
	}

	/**
	 * Safely decode a base64 string, handling Unicode characters
	 */
	private static decodeFromBase64(base64Str: string): string {
		try {
			// Decode from base64 and then handle Unicode characters
			return decodeURIComponent(escape(atob(base64Str)));
		} catch (error) {
			console.error('Failed to decode base64 string:', error);
			throw new Error('Base64 decoding failed');
		}
	}
}
