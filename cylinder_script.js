var SpawnModel = pc.createScript('createBox');

// Drag the generated Template asset into this slot in the Editor
SpawnModel.attributes.add('Roller', {
    type: 'asset',
    assetType: 'template',
    title: 'Model Template'
});

SpawnModel.prototype.initialize = function () {
    if (!templateAsset) {
        console.error('Assign a Template asset to game_asset_01 in the Editor.');
        return;
    }

    if (this.modelTemplate) {
        const instance = this.modelTemplate.resource.instantiate();
        this.entity.addChild(instance);
    }
};
