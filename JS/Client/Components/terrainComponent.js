class terrainComponent
{
	constructor()
	{
		this._ter = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100, 25,25 ), new THREE.MeshNormalMaterial() );
		this._normal = new THREE.Vector3(0,0,3.14);
		this._ter.rotation.z = this._normal.z;
		this._addScene = false;
	}
}
