describe("ambientLightComponent", function() {
	
    beforeEach(function(){
		ambientLight = new ambientLightComponent();
	});
	
    it("should have an _object property that is a THREE.AmbientLight", function() {
        expect(ambientLight._object).not.toEqual('undefined');
		expect(ambientLight._object).toEqual(jasmine.any(THREE.AmbientLight));
    });   
	it("should have an addScene property", function() {
        expect(typeof ambientLight._addScene).toEqual('boolean');
    });  
});