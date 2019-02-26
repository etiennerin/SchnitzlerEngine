class eventsSystem
{
	constructor()
	{
		if(!eventsSystem._instance)
		{
			let eventSys = this;
			this._entityComponents = {};
			this._keyStack = {};
			document.addEventListener("keydown",function(ev){eventSys._keyStack[ev.keyCode]=ev;/*eventSys._currentEvent = ev;*/ });
			document.addEventListener("keyup",function(ev){delete eventSys._keyStack[ev.keyCode];/*eventSys._currentEvent = undefined;*/ });
			eventsSystem._instance = this;
		}
		return eventsSystem._instance;
	}
	/*resetEventList()
	{
		for(let compNames in this._entityComponents)
			for(let comp of this._entityComponents[compNames])
				if(comp._isMoving !== 'undefined')
					comp._changeCamera = false;
				else
					comp._isMoving = false;
	}*/
	execute()
	{
		for(let i = 0; i<Object.keys(this._keyStack).length;i++)
			switch(this._keyStack[Object.keys(this._keyStack)[i]].type)
			{
				case 'keydown' : 
					switch(this._keyStack[Object.keys(this._keyStack)[i]].which)
					{
						case 40 : this._entityComponents._moveDownComponent[0]._isMoving = true; break;
						case 39 : this._entityComponents._moveRightComponent[0]._isMoving = true; break;
						case 38 : this._entityComponents._moveUpComponent[0]._isMoving = true; break;
						case 37 : this._entityComponents._moveLeftComponent[0]._isMoving = true; break;
						case 82 : this._entityComponents._changeCameraComponent[0]._changeCamera = true; break;
					}
					//this.resetEventList();
					break;
				case 'mousedown' : break;
			}
	}
	static getInstance()
	{
		const inst = new eventsSystem();
		//Object.freeze(inst);
		return inst;
	}
}