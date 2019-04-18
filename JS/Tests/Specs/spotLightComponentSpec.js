describe("spotLightComponent", function() {
	
    beforeEach(function(){
		spotLight = new spotLightComponent();
	});
	
    it("should have an object property that is an instance of THREE.SpotLight", function() {
		expect(spotLight._object).toEqual(jasmine.any(THREE.SpotLight));
    });
	it("should have an _addScene property that is a boolean", function() {
		expect(typeof spotLight._addScene).toEqual('boolean');
    });   
});