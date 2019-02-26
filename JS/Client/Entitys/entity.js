let entId = 0;

class entity
{
	constructor()
	{
		this._components = {};
		this._entityId = ++entId;
	}
	addComponent(comp){this._components["_"+comp.constructor.name]=comp;}
	print(){console.log(this);}
}