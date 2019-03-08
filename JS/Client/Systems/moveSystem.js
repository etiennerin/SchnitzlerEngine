class moveSystem
{
	constructor()
	{
		if(!moveSystem._instance)
		{
			this._entityComponents = {};
			this._currentEntity = {};
			this._direction = new THREE.Vector3();
			moveSystem._instance = this;
		}
		return moveSystem._instance;
	}
	execute()
	{
		for(let compNames in this._entityComponents)
			for(let comp of this._entityComponents[compNames])
				if(comp._isMoving !== 'undefined')
					if(comp._isMoving)
					{
						if(typeof this._entityComponents._playerComponent !== 'undefined')
							this._currentEntity = this._entityComponents._playerComponent[0]._object;
						switch(comp.constructor.name)
						{
							case "moveUpComponent" : this._currentEntity.translateX( 0.1 ); break;
							case "moveDownComponent" : this._currentEntity.translateX( -0.1 ); break;
							case "moveLeftComponent" : this._currentEntity.rotateOnAxis(new THREE.Vector3(0,1,0),0.1); break;
							case "moveRightComponent" : this._currentEntity.rotateOnAxis(new THREE.Vector3(0,1,0),-0.1); break;
						}
						
						/*if(typeof this._entityComponents._cameraComponent !== 'undefined')
							this._currentEntity = this._entityComponents._cameraComponent[0]._camera;
						switch(comp.constructor.name)
						{
							case "moveUpComponent" : this._currentEntity.translateY( 0.1 ); break;
							case "moveDownComponent" : this._currentEntity.translateY( -0.1 ); break;
							case "moveLeftComponent" : this._currentEntity.rotateOnAxis(new THREE.Vector3(0,0,1),0.1); break;
							case "moveRightComponent" : this._currentEntity.rotateOnAxis(new THREE.Vector3(0,0,1),-0.1); break;
						}*/
						
						comp._isMoving = false;
						if((typeof this._entityComponents._cameraComponent !== 'undefined')&&!this._entityComponents._changeCameraComponent[0]._changeCamera)
						{
							let relativeCameraOffset = new THREE.Vector3(-10,2,0);
							let cameraOffset = relativeCameraOffset.applyMatrix4( this._currentEntity.matrixWorld );
							this._entityComponents._cameraComponent[0]._camera.position.x = cameraOffset.x;
							this._entityComponents._cameraComponent[0]._camera.position.y = cameraOffset.y;
							this._entityComponents._cameraComponent[0]._camera.position.z = cameraOffset.z;
							this._entityComponents._cameraComponent[0]._camera.lookAt(this._currentEntity.position);
						}
					}
				/*else if(comp._changeCamera !== 'undefined')
					comp._changeCamera = false;*/
	}
	static getInstance()
	{
		const inst = new moveSystem();
		//Object.freeze(inst);
		return inst;
	}
}