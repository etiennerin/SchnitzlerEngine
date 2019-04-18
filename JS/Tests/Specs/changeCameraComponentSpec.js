describe("changeCameraComponent", function() {
	
    beforeEach(function(){
		changeCamera = new changeCameraComponent();
	});
	
    it("should have a _changeCamera property that is a boolean", function() {
		expect(typeof changeCamera._changeCamera).toEqual('boolean');
    });   
});