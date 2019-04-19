describe("mainMenuDisplaySystem", function() {
	
    beforeEach(function(){
		menu = new mainMenuDisplaySystem();
	});
	
	it("should have a _entityComponents property that is an object", function() {
		expect(typeof menu._entityComponents).toEqual('object');
    });  
	
    it("should have a method execute which adds a menu to the dom", function() {
		expect(menu.execute).toEqual(jasmine.any(Function));
		let ent = new entity();
		ent.addComponent(new mainMenuComponent());

		menu._entityComponents["_"+ent._components["_mainMenuComponent"].constructor.name] = [];
		menu._entityComponents["_"+ent._components["_mainMenuComponent"].constructor.name].push(ent._components["_mainMenuComponent"]);
		
		let numberOfDiv = document.getElementsByTagName('div').length;
		menu.execute();
		expect(document.getElementsByTagName('div').length).toEqual(numberOfDiv+1);
    });  
	
	it("should have a singleton getInstance", function() {
		expect(mainMenuDisplaySystem.getInstance).toEqual(jasmine.any(Function));
    }); 	
});