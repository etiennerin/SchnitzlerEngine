describe("directionalLightComponent", function() {
	
    beforeEach(function(){
		directionalLight = new directionalLightComponent();
	});
	
    it("should have an object property that is an instance of THREE.DirectionalLight", function() {
        expect(directionalLight._object).not.toEqual('undefined');
		expect(directionalLight._object).toEqual(jasmine.any(THREE.DirectionalLight));
    });  
		
	it("should have an addScene property that is a boolean", function() {
        expect(typeof directionalLight._addScene).toEqual('boolean');
    });
});