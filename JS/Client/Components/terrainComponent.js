class terrainComponent
{
	constructor()
	{
		this._ter = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100, 25,25 ), new THREE.MeshNormalMaterial() );
		this._normal = new THREE.Vector3(-Math.PI/2,0,0);
		this._ter.rotation.x = this._normal.x;
		this._addScene = false;
	}
}
