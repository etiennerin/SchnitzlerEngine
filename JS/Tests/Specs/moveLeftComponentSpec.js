describe("moveLeftComponent", function() {
	
    beforeEach(function(){
		moveLeft = new moveLeftComponent();
	});
	
    it("should have an _isMoving property that is a boolean", function() {
        expect(typeof moveLeft._isMoving).toEqual('boolean');
    });   
});