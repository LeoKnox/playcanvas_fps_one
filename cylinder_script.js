var CreateBox = pc.createScript('createBox');

CreateBox.prototype.initialize = function () {
    //var roller = new pc.Entity('Roller');
    var roller = this.app.assets.find('game_asset_01');
    roller.ready(function () {
        var modelEntity = game_asset_01.resource.instantiateRenderEntity();
        modelEntity.setLocalPosition(0, 0, 0);
        this.app.root.addChild(modelEntity);
    }.bind(this));

    roller.setLocalPosition(0, 1, 0);
    this.app.root.addChild(roller);
};
