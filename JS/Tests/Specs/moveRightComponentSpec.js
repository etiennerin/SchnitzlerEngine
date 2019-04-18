describe("moveRightComponent", function() {
	
    beforeEach(function(){
		moveRight = new moveRightComponent();
	});
	
    it("should have an _isMoving property that is a boolean", function() {
        expect(typeof moveRight._isMoving).toEqual('boolean');
    });   
});