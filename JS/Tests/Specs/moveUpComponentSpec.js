describe("moveUpComponent", function() {
	
    beforeEach(function(){
		moveUp = new moveUpComponent();
	});
	
    it("should have an _isMoving property that is a boolean", function() {
        expect(typeof moveUp._isMoving).toEqual('boolean');
    });   
});