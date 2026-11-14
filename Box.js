var Box = pc.createScript('box');

// initialize code called once per entity
Box.prototype.initialize = function() {
this.torque=7;
this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this)
this.startPosition = this.entity.getLocalPosition().clone();
this.startRotation = this.entity.getLocalRotation().clone();
//this.anim.setBoolean('moving', false);
//this.anim.baseLayer.assignAnimation('moving', moving.idle);
this.moving = false;
};

Box.prototype.onKeyDown = function (event) {
    event.event.preventDefault();
}

// update code called every frame
Box.prototype.update = function(dt) {
    var pos = this.entity.getLocalPosition();
this.playerPos =this.entity.getLocalPosition();

var app = this.app;


if(app.keyboard.isPressed(pc.KEY_Q)) {
    this.entity.translateLocal(-0.1,0,0);
    this.entity.anim.setBoolean('moving', false);
}
if(app.keyboard.isPressed(pc.KEY_E)) {
    this.entity.translateLocal(0.1,0,0);
}
if(app.keyboard.isPressed(pc.KEY_W)) {
    this.entity.translateLocal(0,0,-0.1);
}
if(app.keyboard.isPressed(pc.KEY_S)) {
    this.entity.translateLocal(0,0,0.1);
}
if(app.keyboard.isPressed(pc.KEY_A)) {
    this.entity.rotateLocal(0,5,0)
}
if(app.keyboard.isPressed(pc.KEY_D)) {
    this.entity.rotateLocal(0,-5,0)
}
/*if(app.keyboard.isPressed(pc.KEY_L)) {
    if (app.keyboard.wasPressed(pc.KEY_L)) {
    this.entity.anim.setBoolean(
        'moving',
        !this.entity.anim.getBoolean('moving')
    );
}
}*/
if (app.keyboard.wasPressed(pc.KEY_L)) {
    this.moving = !this.moving;
    this.entity.anim.setBoolean('moving', this.moving);
}

var pos = this.entity.getLocalPosition();

if (pos.x < -9) pos.x = 9;
if (pos.x > 9)  pos.x = -9;
if (pos.z < -7) pos.z = 7;
if (pos.z > 7)  pos.z = -7;

this.entity.setLocalPosition(pos);

    if (app.keyboard.wasPressed(pc.KEY_R)) {
    this.reset();
}
};

console.log(this.startRotation);
Box.prototype.reset = function() {
    this.entity.setLocalPosition(this.startPosition);
    this.entity.setLocalRotation(this.startRotation);
};
