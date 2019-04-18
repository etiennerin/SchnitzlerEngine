describe("mainMenuComponent", function() {
	
    beforeEach(function(){
		menu = new mainMenuComponent();
	});
	
    it("should have an object property", function() {
        expect(menu._object).not.toEqual('undefined');
		expect(menu._object).toEqual(jasmine.any(HTMLElement));
    });  
	
	it("should have an items property", function() {
        expect(menu._items).not.toEqual('undefined');
		expect(menu._items).toEqual(jasmine.any(Array));
    }); 	
});