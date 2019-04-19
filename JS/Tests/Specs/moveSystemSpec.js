describe("moveSystem", function() {
	
    beforeEach(function(){
		moveSys = new moveSystem();
	});
	
    it("should have an _entityComponent property that is an object", function() {
		expect(typeof moveSys._entityComponents).toEqual('object');
    });
	it("should have an _currentEntity property that is an object", function() {
		expect(typeof moveSys._currentEntity).toEqual('object');
    });
	it("should have an _direction property that is a THREE.Vector3", function() {
		expect(moveSys._direction).toEqual(jasmine.any(THREE.Vector3));
    });

	it("should have an execute method which translates a camera or player component", function() {
		expect(moveSys.execute).toEqual(jasmine.any(Function));
		let ent = new entity();
		ent.addComponent(new playerComponent());
		ent.addComponent(new moveUpComponent());
		
		ent._components["_moveUpComponent"]._isMoving = true;
		
		moveSys._entityComponents["_"+ent._components["_playerComponent"].constructor.name] = [];
		moveSys._entityComponents["_"+ent._components["_moveUpComponent"].constructor.name] = [];
		moveSys._entityComponents["_"+ent._components["_playerComponent"].constructor.name].push(ent._components["_playerComponent"]);
		moveSys._entityComponents["_"+ent._components["_moveUpComponent"].constructor.name].push(ent._components["_moveUpComponent"]);
		
		console.log(moveSys._entityComponents);
		console.log(ent._components["_playerComponent"]._object);
		let = precPlayerPosX = ent._components["_playerComponent"]._object.position.x;
		moveSys.execute();
		expect(ent._components["_playerComponent"]._object.position.x>precPlayerPosX).toBe(true);
    });
	
	it("should have a static getInstance method", function() {
		expect(moveSystem.getInstance).toEqual(jasmine.any(Function));
    });
});