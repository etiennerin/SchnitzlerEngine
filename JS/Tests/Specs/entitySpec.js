describe("entity", function() {
	
    beforeEach(function(){
		ent = new entity();
	});
	
    it("should have a _components property that is an object", function() {
		expect(typeof ent._components).toEqual('object');
    });
	
	it("should have a addComponent method that adds components", function() {
		expect(ent.addComponent).toEqual(jasmine.any(Function));
		let component = new terrainComponent();
		ent.addComponent(component);
		expect(Object.keys(ent._components).length).toBe(1);
    });
	
	it("should have a print method", function() {
		expect(ent.print).toEqual(jasmine.any(Function));
    });
	
	it("should have a unique random id", function() {
		let entityIds = [];
		for(entityIds;entityIds.length<100;entityIds.push(new entity()._entityId));
		let uniqueEntityIds = new Set(entityIds);
		expect(uniqueEntityIds.size).toEqual(100);
    }); 
});