class changeCameraSystem
{
	constructor()
	{
		if(!changeCameraSystem._instance)
		{
			this._entityComponents={};
			changeCameraSystem._instance = this;
		}
		return changeCameraSystem._instance;
	}
	
	execute()
	{
		//console.log(this._entityComponents._changeCameraComponent[0]._changeCamera);
		if(this._entityComponents._changeCameraComponent[0]._changeCamera)
		{
			this._entityComponents._cameraComponent[0]._camera.position.set(0,10,0);
			this._entityComponents._cameraComponent[0]._camera.rotation.set(-Math.PI/2,0,0);
			//this._entityComponents._changeCameraComponent[0]._changeCamera = false;
		}
	}
	
	static getInstance()
	{
		const inst = new changeCameraSystem();
		return inst;
	}
}