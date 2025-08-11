import * as Blockly from 'blockly';

export interface DuplicatorState {
	savedPositions: Map<string, { x: number; y: number }>;
}

export class BlockDuplicator {
	private state: DuplicatorState;
	private workspace: Blockly.WorkspaceSvg;
	private onUpdateCallback?: () => void;

	constructor(workspace: Blockly.WorkspaceSvg, onUpdate?: () => void) {
		this.workspace = workspace;
		this.onUpdateCallback = onUpdate;
		this.state = { savedPositions: new Map() };
		this.setupEventListeners();
	}

	duplicateSelectedBlock(): string | null {
		const selectedBlock = Blockly.getSelected();
		if (!selectedBlock || !(selectedBlock instanceof Blockly.BlockSvg)) return null;
		try {
			Blockly.Events.setGroup(true);
			const blockXml = this.blockToDomWithoutNext(selectedBlock);
			const duplicatedBlock = blockXml instanceof Element ? Blockly.Xml.domToBlock(blockXml, this.workspace) as Blockly.BlockSvg : Blockly.Xml.domToBlock(blockXml.firstElementChild!, this.workspace) as Blockly.BlockSvg;
			if (!duplicatedBlock) return null;
			duplicatedBlock.initSvg();
			duplicatedBlock.render();
			this.insertDuplicateAfterSelected(selectedBlock, duplicatedBlock);
			Blockly.common.setSelected(duplicatedBlock);
			this.onUpdateCallback?.();
			return duplicatedBlock.id;
		} catch {
			return null;
		} finally {
			Blockly.Events.setGroup(false);
		}
	}

	private blockToDomWithoutNext(block: Blockly.BlockSvg): Element | DocumentFragment {
		const nextBlock = block.nextConnection?.targetBlock() as Blockly.BlockSvg | null;
		if (nextBlock) block.nextConnection?.disconnect();
		const xml = Blockly.Xml.blockToDom(block);
		if (nextBlock) block.nextConnection?.connect(nextBlock.previousConnection);
		return xml;
	}

	private insertDuplicateAfterSelected(originalBlock: Blockly.BlockSvg, duplicatedBlock: Blockly.BlockSvg): void {
		const nextBlock = originalBlock.nextConnection?.targetBlock();
		originalBlock.nextConnection?.disconnect();
		if (!this.tryConnectBlocks(originalBlock, duplicatedBlock)) this.positionDuplicateManually(originalBlock, duplicatedBlock);
		if (nextBlock && !this.tryConnectBlocks(duplicatedBlock, nextBlock)) this.positionDuplicateManually(originalBlock, duplicatedBlock);
		this.workspace.render();
	}

	private tryConnectBlocks(blockA: Blockly.BlockSvg, blockB: Blockly.BlockSvg): boolean {
		try {
			blockA.nextConnection?.connect(blockB.previousConnection);
			return true;
		} catch {
			return false;
		}
	}

	private positionDuplicateManually(originalBlock: Blockly.BlockSvg, duplicatedBlock: Blockly.BlockSvg): void {
		const originalPos = originalBlock.getRelativeToSurfaceXY();
		const blockHeight = originalBlock.getHeightWidth().height;
		const duplicatePos = duplicatedBlock.getRelativeToSurfaceXY();
		duplicatedBlock.moveBy(originalPos.x - duplicatePos.x, originalPos.y + blockHeight + 20 - duplicatePos.y);
	}

	private saveBlockPosition(blockId: string): void {
		const block = this.workspace.getBlockById(blockId);
		if (block) this.state.savedPositions.set(blockId, block.getRelativeToSurfaceXY());
	}

	private setupEventListeners(): void {
		this.workspace.addChangeListener((e: any) => {
			if (e.type === 'move' && e.blockId) this.saveBlockPosition(e.blockId);
		});
	}

	dispose(): void {}
}
