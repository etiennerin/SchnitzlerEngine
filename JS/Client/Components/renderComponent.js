class renderComponent
{
	constructor()
	{
		this._renderer = new THREE.WebGLRenderer({antialias:true});
		this._renderer.shadowMap.enabled = true;
		this._renderer.shadowMap.type = THREE.BasicShadowMap;
		this._renderer.gammaInput = true;
		this._renderer.gammaOutput = true;
	}
}