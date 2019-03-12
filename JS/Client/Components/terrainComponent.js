class terrainComponent
{
	constructor()
	{
		this._object = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100, 25,25 ) );
		this._normal = new THREE.Vector3(-Math.PI/2,0,0);
		this._object.rotation.x = this._normal.x;
		this._addScene = false;
	}
}
