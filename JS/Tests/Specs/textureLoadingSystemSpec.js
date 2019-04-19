describe("textureLoadingSystem", function() {
	
    beforeEach(function(){
		texLoa = new textureLoadingSystem();
	});
	
    it("should have an _entityComponent property that is an object", function() {
		expect(typeof texLoa._entityComponents).toEqual('object');
    });
	
	it("should have a _prevLength property", function() {
		expect(texLoa._prevLength).toEqual(0);
    });
	
	it("should have an execute method which adds a TRHEE.MeshNormalMaterial to a THREE.Mesh 'Hard to test because of cross origin'", function() {
		expect(texLoa.execute).toEqual(jasmine.any(Function));
		let ent = new entity();
		ent.addComponent(new terrainComponent());
		ent.addComponent(new textureLoaderComponent());
		ent.addComponent(new grassOneComponent());

		texLoa._entityComponents["_"+ent._components["_terrainComponent"].constructor.name] = [];
		texLoa._entityComponents["_"+ent._components["_textureLoaderComponent"].constructor.name] = [];
		texLoa._entityComponents["_"+ent._components["_grassOneComponent"].constructor.name] = [];
		texLoa._entityComponents["_"+ent._components["_terrainComponent"].constructor.name].push(ent._components["_terrainComponent"]);
		texLoa._entityComponents["_"+ent._components["_textureLoaderComponent"].constructor.name].push(ent._components["_textureLoaderComponent"]);
		texLoa._entityComponents["_"+ent._components["_grassOneComponent"].constructor.name].push(ent._components["_grassOneComponent"]);
		
		texLoa.execute();
		expect(ent._components["_terrainComponent"]._object.material).toEqual(jasmine.any(THREE.MeshNormalMaterial));
    });
	
	it("should have a static getInstance method", function() {
		expect(textureLoadingSystem.getInstance).toEqual(jasmine.any(Function));
    });
});