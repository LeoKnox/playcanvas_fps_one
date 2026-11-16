var CreateBox = pc.createScript('createBox');

CreateBox.prototype.initialize = function () {
    var roller = new pc.Entity('Roller');
    roller.addComponent('render', { type: 'Roller' });

    roller.setLocalPosition(0, 1, 0);
    this.app.root.addChild(roller);
};
