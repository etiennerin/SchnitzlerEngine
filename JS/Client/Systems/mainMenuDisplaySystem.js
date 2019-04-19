class mainMenuDisplaySystem
{
	constructor()
	{
		if(!mainMenuDisplaySystem._instance)
		{
			this._entityComponents = {};
			mainMenuDisplaySystem._instance = this;
		}
		return mainMenuDisplaySystem._instance;
	}
	execute()
	{
		for(let current in this._entityComponents)
			for(let comp of this._entityComponents[current])
			{
				if(!comp._added)
				{
					comp._object.className="menu";
					document.body.appendChild(comp._object);
					for(let item of comp._items)
					{
						let curSpan = document.createElement('span');
						curSpan.innerHTML = item+"<br/>";
						item==comp._items[0]?curSpan.className = "title":curSpan.className = "item";
						comp._object.appendChild(curSpan);
					}
					comp._added = true;
				}
			}
	}
	static getInstance()
	{
		const inst = new mainMenuDisplaySystem();
		return inst;
	}
}