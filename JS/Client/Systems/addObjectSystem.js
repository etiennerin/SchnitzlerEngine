class addObjectSystem
{
	constructor()
	{
		this._entityComponents = {};
		this._injectedSystems  = {};
		this._prevObjects = {};
	}
	execute()
	{
		for(let objects in this._entityComponents)
		{
			if(typeof this._prevObjects[objects] == 'undefined')
				this._prevObjects[objects] = 0;
			if(this._prevObjects[objects]<this._entityComponents[objects].length)
				for(let comp of this._entityComponents[objects])
					if(!comp._addScene)
					{
						if(typeof comp._object!=='undefined')
						{
							this._injectedSystems.renderingSystem._entityComponents._sceneComponent[0]._scene.add(comp[Object.keys(comp)[0]]);
							comp._addScene=true;
						}
					}
			this._prevObjects[objects] = this._entityComponents[objects].length;
		}
	}
	static getInstance()
	{
		return new addObjectSystem();
	}
}