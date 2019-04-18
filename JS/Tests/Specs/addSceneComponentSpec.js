describe("addSceneComponent", function() {
	
    beforeEach(function(){
		scene = new addSceneComponent();
	});
	
    it("should have a boolean named added", function() {
        expect(typeof scene._added).toEqual('boolean');
    });   
});