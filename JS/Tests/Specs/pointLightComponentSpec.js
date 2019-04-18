describe("pointLightComponent", function() {
	
    beforeEach(function(){
		pointLight = new pointLightComponent();
	});
	
    it("should have an object property that is an instance of THREE.PointLight", function() {
		expect(pointLight._object).toEqual(jasmine.any(THREE.PointLight));
    });   
	it("should have an _addScene property that is a boolean", function() {
		expect(typeof pointLight._addScene).toEqual('boolean');
    });   
});