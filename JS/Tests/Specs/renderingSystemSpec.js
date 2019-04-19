describe("renderingSystem", function() {
	
    beforeEach(function(){
		renderSys = new renderingSystem();
	});
	
    it("should have an _entityComponent property that is an object", function() {
		expect(typeof renderSys._entityComponents).toEqual('object');
    });
	it("should have an init method that adds a canvas to the body", function() {
		expect(renderSys.init).toEqual(jasmine.any(Function));
		
		let ent = new entity();
		ent.addComponent(new renderComponent());
		
		renderSys._entityComponents["_"+ent._components["_renderComponent"].constructor.name] = [];
		renderSys._entityComponents["_"+ent._components["_renderComponent"].constructor.name].push(ent._components["_renderComponent"]);
		
		renderSys.init();
		expect(document.body.getElementsByTagName('canvas').length==1).toBe(true);
		document.body.removeChild(document.body.getElementsByTagName('canvas')[0]);
    });
	
	it("should have an execute method which adds a canvas to the scene", function() {
		expect(renderSys.execute).toEqual(jasmine.any(Function));
		let ent = new entity();
		ent.addComponent(new renderComponent());
		ent.addComponent(new sceneComponent());
		ent.addComponent(new cameraComponent());
		
		renderSys._entityComponents["_"+ent._components["_renderComponent"].constructor.name] = [];
		renderSys._entityComponents["_"+ent._components["_sceneComponent"].constructor.name] = [];
		renderSys._entityComponents["_"+ent._components["_cameraComponent"].constructor.name] = [];
		renderSys._entityComponents["_"+ent._components["_renderComponent"].constructor.name].push(ent._components["_renderComponent"]);
		renderSys._entityComponents["_"+ent._components["_sceneComponent"].constructor.name].push(ent._components["_sceneComponent"]);
		renderSys._entityComponents["_"+ent._components["_cameraComponent"].constructor.name].push(ent._components["_cameraComponent"]);
		
		spyOn(ent._components["_renderComponent"]._renderer,"render");
		renderSys.execute();
		expect(ent._components["_renderComponent"]._renderer.render).toHaveBeenCalled();
    });
	
	it("should have a static getInstance method", function() {
		expect(renderingSystem.getInstance).toEqual(jasmine.any(Function));
    });
});