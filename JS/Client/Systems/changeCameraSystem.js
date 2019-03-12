class changeCameraSystem
{
	constructor()
	{
		if(!changeCameraSystem._instance)
		{
			this._entityComponents={};
			this._cameraPositionSave=new THREE.Vector3();
			this._cameraRotationSave=new THREE.Vector3();
			changeCameraSystem._instance = this;
		}
		return changeCameraSystem._instance;
	}
	
	execute()
	{
		//console.log(this._entityComponents._changeCameraComponent[0]._changeCamera);
		if(this._entityComponents._changeCameraComponent[0]._changeCamera)
		{
			this._cameraPositionSave.set(this._entityComponents._cameraComponent[0]._camera.position);
			this._cameraRotationSave.set(this._entityComponents._cameraComponent[0]._camera.rotation);
			this._entityComponents._cameraComponent[0]._camera.position.set(0,10,0);
			this._entityComponents._cameraComponent[0]._camera.rotation.set(-Math.PI/2,0,0);
			//this._entityComponents._changeCameraComponent[0]._changeCamera = false;
		}
		/*else 
		{
			this._entityComponents._cameraComponent[0]._camera.position.set(this._cameraPositionSave);
			this._entityComponents._cameraComponent[0]._camera.rotation.set(this._cameraRotationSave);
		}*/
	}
	
	static getInstance()
	{
		const inst = new changeCameraSystem();
		return inst;
	}
}