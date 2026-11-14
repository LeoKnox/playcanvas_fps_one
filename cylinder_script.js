var CreateBox = pc.createScript('createBox');

CreateBox.prototype.initialize = function() {

};

CreateBox.prototype.update = function(dt) {
const cylinder = new pc.Entity('Cylinder');
cylinder.addComponent('render', { type: 'cylinder' });
app.root.addChild(cylinder);
cylinder.setLocalPosition(0, 0, 0);
};
