describe("moveDownComponent", function() {
	
    beforeEach(function(){
		moveDown = new moveDownComponent();
	});
	
    it("should have an _isMoving property that is a boolean", function() {
        expect(typeof moveDown._isMoving).toEqual('boolean');
    });   
});