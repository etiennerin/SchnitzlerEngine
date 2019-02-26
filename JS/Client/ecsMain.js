class ecsMain
{
	constructor()
	{
		this._entitys = {};
		this._systems = {};
		this._currentFrame = 0;
	}
	addComponents(sys,entit)
	{
		for(let comp in entit._components)
		{
			if(typeof sys._entityComponents["_"+entit._components[comp].constructor.name] == 'undefined')
				sys._entityComponents["_"+entit._components[comp].constructor.name] = [];
			sys._entityComponents["_"+entit._components[comp].constructor.name].push(entit._components[comp]);
		}
	}
	init()
	{
		let ent = new entity();
		ent.addComponent(new renderComponent());
		this._entitys[ent._entityId]=ent;
		ent = new entity();
		ent.addComponent(new cameraComponent());
		ent.addComponent(new moveLeftComponent());
		ent.addComponent(new moveRightComponent());
		ent.addComponent(new moveDownComponent());
		ent.addComponent(new moveUpComponent());
		this._entitys[ent._entityId]=ent;
		ent = new entity();
		ent.addComponent(new sceneComponent());
		this._entitys[ent._entityId]=ent;
		ent = new entity();
		ent.addComponent(new terrainComponent());
		this._entitys[ent._entityId]=ent;
		ent = new entity();
		ent.addComponent(new playerComponent());
		ent.addComponent(new moveLeftComponent());
		ent.addComponent(new moveRightComponent());
		ent.addComponent(new moveDownComponent());
		ent.addComponent(new moveUpComponent());
		this._entitys[ent._entityId]=ent;
		
		this._systems["_renderingSystem"] = renderingSystem.getInstance();
		this.addComponents(this._systems._renderingSystem,this._entitys[Object.keys(this._entitys)[0]]);
		this.addComponents(this._systems._renderingSystem,this._entitys[Object.keys(this._entitys)[1]]);
		this.addComponents(this._systems._renderingSystem,this._entitys[Object.keys(this._entitys)[2]]);
		this._systems["_addObjectSystem"] = addObjectSystem.getInstance();
		this.addComponents(this._systems._addObjectSystem,this._entitys[Object.keys(this._entitys)[3]]);
		this.addComponents(this._systems._addObjectSystem,this._entitys[Object.keys(this._entitys)[4]]);
		this._systems._addObjectSystem._injectedSystems["renderingSystem"] = this._systems._renderingSystem;
		this._systems["_eventsSystem"] = eventsSystem.getInstance();
		this.addComponents(this._systems._eventsSystem,this._entitys[Object.keys(this._entitys)[4]]);
		this._systems["_moveSystem"] = moveSystem.getInstance();
		this.addComponents(this._systems._moveSystem,this._entitys[Object.keys(this._entitys)[1]]);
		this.addComponents(this._systems._moveSystem,this._entitys[Object.keys(this._entitys)[4]]);
		
		this._systems._renderingSystem.init();
		this.run();
	}
	run()
	{
		let currentMain = this;
		for(let currentSystem in this._systems)
			this._systems[currentSystem].execute();
		setTimeout(function(){currentMain.run();},1000/60);
	}
}