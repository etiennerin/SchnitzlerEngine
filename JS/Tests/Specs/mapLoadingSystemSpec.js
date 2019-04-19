describe("mapLoadingSystem", function() {
	
    beforeEach(function(){
		loadMp = new mapLoadingSystem();
	});
	
    it("should have an _entityComponent property that is an object", function() {
		expect(typeof loadMp._entityComponents).toEqual('object');
    });
	it("should have an _prevLength property ", function() {
		expect(loadMp._prevLength).toEqual(0);
    });
	it("should have an _injectedSystems property that is an object", function() {
		expect(typeof loadMp._injectedSystems).toEqual('object');
    });
	
	it("should have an execute method which adds some meshes to a group 'hard to test because of cross origin'", function() {
		expect(loadMp.execute).toEqual(jasmine.any(Function));
		let ent = new entity();
		ent.addComponent(new groupComponent());
		ent.addComponent(new textureLoaderComponent());
		
		loadMp._entityComponents["_"+ent._components["_groupComponent"].constructor.name] = [];
		loadMp._entityComponents["_"+ent._components["_textureLoaderComponent"].constructor.name] = [];
		loadMp._entityComponents["_"+ent._components["_groupComponent"].constructor.name].push(ent._components["_groupComponent"]);
		loadMp._entityComponents["_"+ent._components["_textureLoaderComponent"].constructor.name].push(ent._components["_textureLoaderComponent"]);
		
		loadMp.execute();
		expect(ent._components["_groupComponent"]._object.children[0]).toEqual(jasmine.any(THREE.Mesh));
    });
	
	it("should have a static getInstance method", function() {
		expect(mapLoadingSystem.getInstance).toEqual(jasmine.any(Function));
    });
});