describe("cameraComponent", function() {
	
    beforeEach(function(){
		camera = new cameraComponent();
	});
	
    it("should have a camera object that is a THREE.perspectiveCamera", function() {
        expect(camera._camera).not.toEqual('undefined');
		expect(camera._camera).toEqual(jasmine.any(THREE.PerspectiveCamera));
    });

	it("should have a pos property that is a THREE.Vector 3", function() {
        expect(camera._pos).not.toEqual('undefined');
		expect(camera._pos).toEqual(jasmine.any(THREE.Vector3));
    });   
});