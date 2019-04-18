describe("renderComponent", function() {
	
    beforeEach(function(){
		renderer = new renderComponent();
	});
	
    it("should have a _renderer property that is an instance of THREE.WebGLRenderer", function() {
		expect(renderer._renderer).toEqual(jasmine.any(THREE.WebGLRenderer));
    });   
});