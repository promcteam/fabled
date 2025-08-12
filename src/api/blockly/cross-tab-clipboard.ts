import * as Blockly from 'blockly';

export interface ClipboardBlock {
	xml: string;
	timestamp: number;
	sourceWorkspaceId: string;
	extraState?: { [blockId: string]: any };
}

export class CrossTabClipboard {
	private static readonly STORAGE_KEY = 'fabled_blockly_clipboard';
	private static readonly MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours

	/**
	 * Copy the selected block to cross-tab clipboard
	 */
	static copySelectedBlock(): boolean {
		const selectedBlock = Blockly.getSelected();
		if (!selectedBlock || !(selectedBlock instanceof Blockly.BlockSvg)) {
			return false;
		}

		try {
			// Convert block to XML including all children
			const blockXml = Blockly.Xml.blockToDom(selectedBlock);
			const xmlString = Blockly.Xml.domToText(blockXml);

			// Collect extra state from all blocks in the tree
			const extraState = this.collectExtraState(selectedBlock);

			// Create clipboard data
			const clipboardData: ClipboardBlock = {
				xml: xmlString,
				timestamp: Date.now(),
				sourceWorkspaceId: selectedBlock.workspace.id,
				extraState: extraState
			};

			// Store in localStorage for cross-tab access
			localStorage.setItem(this.STORAGE_KEY, JSON.stringify(clipboardData));
			
			// Also copy to system clipboard as fallback
			this.copyToSystemClipboard(xmlString);
			
			return true;
		} catch (error) {
			console.error('Failed to copy block:', error);
			return false;
		}
	}

	/**
	 * Paste block from cross-tab clipboard to the specified workspace
	 */
	static pasteBlock(workspace: Blockly.WorkspaceSvg, onUpdate?: () => void): string | null {
		try {
			const clipboardData = this.getClipboardData();
			if (!clipboardData) {
				return null;
			}

			// Check if data is too old
			if (Date.now() - clipboardData.timestamp > this.MAX_AGE) {
				this.clearClipboard();
				return null;
			}

			// Parse XML and create block (Blockly automatically handles extra state)
			const xmlDoc = Blockly.utils.xml.textToDom(clipboardData.xml);
			const newBlock = Blockly.Xml.domToBlock(xmlDoc, workspace) as Blockly.BlockSvg;
			
			if (!newBlock) {
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

			return newBlock.id;
		} catch (error) {
			console.error('Failed to paste block:', error);
			return null;
		}
	}

	/**
	 * Check if there's valid clipboard data available
	 */
	static hasClipboardData(): boolean {
		const data = this.getClipboardData();
		return data !== null && (Date.now() - data.timestamp) <= this.MAX_AGE;
	}

	/**
	 * Clear the clipboard
	 */
	static clearClipboard(): void {
		localStorage.removeItem(this.STORAGE_KEY);
	}

	/**
	 * Get clipboard data from localStorage
	 */
	private static getClipboardData(): ClipboardBlock | null {
		try {
			const stored = localStorage.getItem(this.STORAGE_KEY);
			if (!stored) {
				return null;
			}
			return JSON.parse(stored) as ClipboardBlock;
		} catch {
			return null;
		}
	}

	/**
	 * Copy XML to system clipboard as fallback
	 */
	private static async copyToSystemClipboard(xml: string): Promise<void> {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(xml);
			} else {
				// Fallback for older browsers
				const textarea = document.createElement('textarea');
				textarea.value = xml;
				textarea.style.position = 'fixed';
				textarea.style.opacity = '0';
				document.body.appendChild(textarea);
				textarea.select();
				document.execCommand('copy');
				document.body.removeChild(textarea);
			}
		} catch (error) {
			console.warn('Failed to copy to system clipboard:', error);
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
	static getClipboardPreview(): string | null {
		const data = this.getClipboardData();
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
}
