describe("changeCameraSystem", function() {
	
    beforeEach(function(){
		changeCamera = new changeCameraSystem();
	});
	
    it("should have an _entityComponent property that is an object", function() {
		expect(typeof changeCamera._entityComponents).toEqual('object');
    });
	it("should have an _cameraPositionSave property that is an instance of THREE.Vector3", function() {
		expect(changeCamera._cameraPositionSave).toEqual(jasmine.any(THREE.Vector3));
    });
	it("should have an _cameraRotationSave property that is an instance of THREE.Vector3", function() {
		expect(changeCamera._cameraRotationSave).toEqual(jasmine.any(THREE.Vector3));
    });
	
	it("should have an execute method which changes the camera position", function() {
		expect(changeCamera.execute).toEqual(jasmine.any(Function));
		let ent = new entity();
		ent.addComponent(new cameraComponent());
		ent.addComponent(new changeCameraComponent());
		
		ent._components["_changeCameraComponent"]._changeCamera = true;
		
		changeCamera._entityComponents["_"+ent._components["_cameraComponent"].constructor.name] = [];
		changeCamera._entityComponents["_"+ent._components["_changeCameraComponent"].constructor.name] = [];
		
		changeCamera._entityComponents["_"+ent._components["_cameraComponent"].constructor.name].push(ent._components["_cameraComponent"]);
		changeCamera._entityComponents["_"+ent._components["_changeCameraComponent"].constructor.name].push(ent._components["_changeCameraComponent"]);
		
		changeCamera.execute();
		expect(ent._components["_cameraComponent"]._camera.position).toEqual(new THREE.Vector3(0,10,0));
		expect(ent._components["_cameraComponent"]._camera.rotation.x).toEqual(new THREE.Euler(-Math.PI/2,0,0).x);
		expect(ent._components["_cameraComponent"]._camera.rotation.y).toEqual(new THREE.Euler(-Math.PI/2,0,0).y);
		expect(ent._components["_cameraComponent"]._camera.rotation.z).toEqual(new THREE.Euler(-Math.PI/2,0,0).z);
    });
	
	it("should have a static getInstance method", function() {
		expect(changeCameraSystem.getInstance).toEqual(jasmine.any(Function));
    });
});