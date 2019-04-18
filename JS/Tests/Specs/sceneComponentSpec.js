describe("scenenComponent", function() {
	
    beforeEach(function(){
		scene= new sceneComponent();
	});
	
    it("should have a scene property that is an instance of THREE.Scene", function() {
		expect(scene._scene).toEqual(jasmine.any(THREE.Scene));
    });   
});