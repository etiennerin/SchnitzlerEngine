describe("mainMenuDisplaySystem", function() {
	
    beforeEach(function(){
		menu = new mainMenuDisplaySystem();
	});
	
    it("should have a method execute", function() {
		expect(menu.execute).toEqual(jasmine.any(Function));
    });  
	
	it("should have a singleton getInstance", function() {
		expect(mainMenuDisplaySystem.getInstance).toEqual(jasmine.any(Function));
    }); 	
});