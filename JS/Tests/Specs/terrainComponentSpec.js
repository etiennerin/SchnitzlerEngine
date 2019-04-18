describe("TerrainComponent", function() {
	
    beforeEach(function(){
		terrain = new terrainComponent();
	});
	
    it("should have an object property that is an instance of THREE.Mesh", function() {
        expect(terrain._object).not.toEqual('undefined');
		expect(terrain._object).toEqual(jasmine.any(THREE.Mesh));
    });   
});