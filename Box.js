var Box = pc.createScript('box');

// initialize code called once per entity
Box.prototype.initialize = function() {
this.torque=7;
this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this)
};

Box.prototype.onKeyDown = function (event) {
    event.event.preventDefault();
}

// update code called every frame
Box.prototype.update = function(dt) {
this.playerPos =this.entity.getLocalPosition();

var app = this.app;
if(app.keyboard.isPressed(pc.KEY_LEFT)) {
    this.entity.translateLocal(-0.1,0,0);
}
if(app.keyboard.isPressed(pc.KEY_RIGHT)) {
    this.entity.translateLocal(0.1,0,0);
}
if(app.keyboard.isPressed(pc.KEY_UP)) {
    this.entity.translateLocal(0,0,-0.1);
}
if(app.keyboard.isPressed(pc.KEY_DOWN)) {
    this.entity.translateLocal(0,0,0.1);
}

    if (this.playerPos.x <-9.0) {
    this.entity.rigidbody.teleport( -9, this. playerPos.y, this.playerPos.z);
}
    if (this.playerPos.x > 9.0) {
    this.entity.rigidbody.teleport( 9, this. playerPos.y, this.playerPos.z);
}
    if (this.playerPos.y <-7.0) {
    this.entity.rigidbody.teleport( this. playerPos.x,-7,  this.playerPos.z);
}
    if (this.playerPos.y >7.0) {
    this.entity.rigidbody.teleport( this. playerPos.x,7,  this.playerPos.z);
}

    if (app.keyboard.wasPressed(pc.KEY_R)) {
    this.reset();
}
};

Box.prototype.reset = function() {
    this.entity.rigidbody.teleport(0,2,0);
    this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
    this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;
}
