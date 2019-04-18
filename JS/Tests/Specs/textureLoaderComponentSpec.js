describe("textureLoaderComponent", function() {
	
    beforeEach(function(){
		textureLoader = new textureLoaderComponent();
	});
	
    it("should have a _textureLoader property that is an instance of THREE.DDSLoader", function() {
		expect(textureLoader._textureLoader).toEqual(jasmine.any(THREE.DDSLoader));
    });   
});