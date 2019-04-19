describe("meshLoadingSystem", function() {
	
    beforeEach(function(){
		meshLoad = new meshLoadingSystem();
	});
	
    it("should have an _entityComponent property that is an object", function() {
		expect(typeof meshLoad._entityComponents).toEqual('object');
    });
	it("should have an _currentMeshEntries property ", function() {
		expect(meshLoad._currentMeshEntries).toEqual(0);
    });
	
	it("should have an execute method which adds a THREE.Mesh to a group 'hard to test because of cross origin'", function() {
		expect(meshLoad.execute).toEqual(jasmine.any(Function));
		let ent = new entity();
		ent.addComponent(new meshLoaderComponent());
		ent.addComponent(new groupComponent());
		
		meshLoad._entityComponents["_"+ent._components["_meshLoaderComponent"].constructor.name] = [];
		meshLoad._entityComponents["_"+ent._components["_meshLoaderComponent"].constructor.name].push(ent._components["_meshLoaderComponent"]);
		meshLoad._entityComponents["_"+ent._components["_groupComponent"].constructor.name] = [];
		meshLoad._entityComponents["_"+ent._components["_groupComponent"].constructor.name].push(ent._components["_groupComponent"]);
		
		meshLoad.execute();
		expect(ent._components["_groupComponent"]._object.children[0]).toEqual(jasmine.any(THREE.Mesh));
    });
	
	it("should have a static getInstance method", function() {
		expect(meshLoadingSystem.getInstance).toEqual(jasmine.any(Function));
    });
});