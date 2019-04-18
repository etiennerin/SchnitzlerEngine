describe("grassOneComponent", function() {
	
    beforeEach(function(){
		grassOne = new grassOneComponent();
	});
	
    it("should have a _texture property that is a string", function() {
		expect(typeof grassOne._texture).toEqual('string');
    });   
});