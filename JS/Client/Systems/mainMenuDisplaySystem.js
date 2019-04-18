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
		
	}
	static getInstance()
	{
		const inst = new mainMenuDisplaySystem();
		return inst;
	}
}