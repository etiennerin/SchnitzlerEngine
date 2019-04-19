describe("addObjectSystem", function() {
	
    beforeEach(function(){
		addObjSyst = new addObjectSystem();
	});
	
    it("should have an _entityComponent property that is an object", function() {
		expect(typeof addObjSyst._entityComponents).toEqual('object');
    });
	it("should have an _injectedSystems property that is an object", function() {
		expect(typeof addObjSyst._injectedSystems).toEqual('object');
    });
	it("should have a _prevObjects property that is an object", function() {
		expect(typeof addObjSyst._prevObjects).toEqual('object');
    });
	
	it("should have an execute method which adds objects to the scene", function() {
		expect(addObjSyst.execute).toEqual(jasmine.any(Function));
		let ent = new entity();
		ent.addComponent(new sceneComponent());
		let ent1 = new entity();
		ent1.addComponent(new terrainComponent());
		
		let rendSyst = new renderingSystem();
		rendSyst._entityComponents["_"+ent._components["_sceneComponent"].constructor.name] = [];
		rendSyst._entityComponents["_"+ent._components["_sceneComponent"].constructor.name].push(ent._components["_sceneComponent"]);
		
		addObjSyst._entityComponents["_"+ent1._components["_terrainComponent"].constructor.name] = [];
		addObjSyst._entityComponents["_"+ent1._components["_terrainComponent"].constructor.name].push(ent1._components["_terrainComponent"]);
		
		addObjSyst._injectedSystems["renderingSystem"] = rendSyst;
		
		addObjSyst.execute();
		expect(ent._components["_sceneComponent"]._scene.children[0]).toEqual(jasmine.any(THREE.Mesh));
    });
	
	it("should have a static getInstance method", function() {
		expect(addObjectSystem.getInstance).toEqual(jasmine.any(Function));
    });
});