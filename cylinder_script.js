var CreateBox = pc.createScript('createBox');

CreateBox.attributes.add('roller', {
    type: 'asset',
    assetType: 'container'
});


CreateBox.prototype.initialize = function () {
    var asset = this.glbAsset;

    if (!asset) {
        console.error('Assign a GLB Container asset to the script.');
        return;
    }

    var app = this.app;

    var addModel = function () {
        var modelEntity = asset.resource.instantiateRenderEntity();
        modelEntity.name = asset.name;
        app.root.addChild(modelEntity);
    };

    if (asset.resource) {
        addModel();
    } else {
        asset.once('load', addModel);
        app.assets.load(asset);
    }
};
