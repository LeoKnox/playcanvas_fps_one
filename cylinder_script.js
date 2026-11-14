var CreateBox = pc.createScript('createBox');

const cylinder = new pc.Entity('Cylinder');
cylinder.addComponent('model', { type: 'cylinder' });
this.app.root.addChild(cylinder);

// Optional: position it and give it a colored material
cylinder.setPosition(0, 0, 0);

const material = new pc.StandardMaterial();
material.diffuse.set(0.2, 0.6, 1);
material.update();
cylinder.model.model.meshInstances[0].material = material;
