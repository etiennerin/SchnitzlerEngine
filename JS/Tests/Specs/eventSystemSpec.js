describe("eventSystem", function() {
	
    beforeEach(function(){
		eventSys = new eventsSystem();
	});
	
    it("should have an _entityComponent property that is an object", function() {
		expect(typeof eventSys._entityComponents).toEqual('object');
    });
	it("should have an _keyStack property that is an object", function() {
		expect(typeof eventSys._keyStack).toEqual('object');
    });
	it("should have a _countPressed property", function() {
		expect(eventSys._countPressed).toEqual(0);
    });
	it("should have a _countTurn property", function() {
		expect(eventSys._countTurn).toEqual(0);
    });
	
	it("should have an execute method which sets à move in a direction", function() {
		expect(eventSys.execute).toEqual(jasmine.any(Function));
		let ent = new entity();
		ent.addComponent(new moveUpComponent());
		
		eventSys._entityComponents["_"+ent._components["_moveUpComponent"].constructor.name] = [];
		eventSys._entityComponents["_"+ent._components["_moveUpComponent"].constructor.name].push(ent._components["_moveUpComponent"]);
		
		let kevent = new KeyboardEvent("keydown",{key:"ArrowUp"});
		eventSys._keyStack[38] = kevent;
		
		eventSys.execute();
		expect(ent._components["_moveUpComponent"]._isMoving).toBe(true);
    });
	
	it("should have a static getInstance method", function() {
		expect(eventsSystem.getInstance).toEqual(jasmine.any(Function));
    });
});