describe("planeGeometryComponent", function() {
	
    beforeEach(function(){
		plane = new planeGeometryComponent();
	});
	
    it("should have a geometry property that is an instance of THREE.PlaneGeometry", function() {
		expect(plane._geometry).toEqual(jasmine.any(THREE.PlaneGeometry));
    });   
});