var SpawnModel = pc.createScript('create_box');

// Drag the generated Template asset into this slot in the Editor
SpawnModel.attributes.add('modelTemplate', {
    type: 'asset',
    assetType: 'template',
    title: 'Model Template'
});

SpawnModel.prototype.initialize = function () {
    if (this.modelTemplate) {
        const instance = this.modelTemplate.resource.instantiate();
        this.entity.addChild(instance);
    }
};
