describe("groupComponent", function() {
	
    beforeEach(function(){
		group = new groupComponent();
	});
	
    it("should have an object property that is an instance of THREE.Group", function() {
        expect(group._object).not.toEqual('undefined');
		expect(group._object).toEqual(jasmine.any(THREE.Group));
    });  
		
	it("should have an addScene property that is a boolean", function() {
        expect(typeof group._addScene).toEqual('boolean');
    });
});