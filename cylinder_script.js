var CreateBox = pc.createScript('createBox');

CreateBox.prototype.initialize = function () {
    var cylinder = new pc.Entity('Cylinder');
    cylinder.addComponent('render', { type: 'cylinder' });

    cylinder.setLocalPosition(0, 1, 0);
    this.app.root.addChild(cylinder);
};
