describe("playerComponent", function() {
	
    beforeEach(function(){
		player = new playerComponent();
	});
	
    it("should have an object property that is an instance of THREE.Mesh", function() {
		expect(player._object).toEqual(jasmine.any(THREE.Mesh));
    });   
	
	it("should have a _playerPos property that is an instance of THREE.Vector3", function() {
		expect(player._playerPos).toEqual(jasmine.any(THREE.Vector3));
    });  

	it("should have an _addScene property that is a boolean", function() {
		expect(typeof player._addScene).toEqual('boolean');
    }); 
});