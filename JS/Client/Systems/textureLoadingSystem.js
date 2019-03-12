class textureLoadingSystem
{
	constructor()
	{
		if(!textureLoadingSystem._instance)
		{
			this._entityComponents = {};
			this._prevLength = 0;
			textureLoadingSystem._instance = this;
		}
		return textureLoadingSystem._instance;
	}
	
	execute()
	{
		if(this._entityComponents.length>this._prevLength)
			for( let current in this._entityComponents)
				for(let comp of this._entityComponents[current])
					if(typeof comp._object !== 'undefined')
						comp._object.material = this._entityComponents._textureLoaderComponent[0]._textureLoader.load(this._entityComponents._grassOneComponent[0]._texture);
	}
	
	static getInstance()
	{
		const inst = new textureLoadingSystem();
		return inst;
	}
}