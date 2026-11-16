var CreateBox = pc.createScript('createBox');

CreateBox.prototype.initialize = function () {
    //var roller = new pc.Entity('Roller');
    var roller = this.app.assets.find('Roller');
    roller.ready(function () {
        var modelEntity = asset.resource.instantiateRenderEntity();
        modelEntity.setLocalPosition(0, 0, 0);
        this.app.root.addChild(modelEntity);
    }.bind(this));

    roller.setLocalPosition(0, 1, 0);
    this.app.root.addChild(roller);
};
