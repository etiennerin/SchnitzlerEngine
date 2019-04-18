describe("meshLoaderComponent", function() {
	
    beforeEach(function(){
		loader = new meshLoaderComponent();
	});
	
    it("should have a meshLoader property that is an instance of THREE.FBXLoader", function() {
        expect(loader._meshLoader).not.toEqual('undefined');
		expect(loader._meshLoader).toEqual(jasmine.any(THREE.FBXLoader));
    }); 
});