class pointLightComponent
{
	constructor()
	{
		this._object = new THREE.PointLight( 0xff0000);
		this._object.position.set(0,2,0)
		/*this._object.position.y=10;*/
		this._object.intensity=10;
		this._object.rotation.x=-Math.PI/2;
		//this._pointLight.lookAt(new THREE.Vector3(0,0,0));
		this._addScene = false;
	}
}