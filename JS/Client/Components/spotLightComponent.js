class spotLightComponent
{
	constructor()
	{
		this._object = new THREE.SpotLight( 0xffffff );
		this._object.position.set(0,10,0);
		//this._object.rotation.x = -Math.PI/2;
		this._addScene = false;
	}
}