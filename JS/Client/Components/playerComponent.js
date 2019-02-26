class playerComponent
{
	constructor()
  {
  	this._player = new THREE.Mesh( new THREE.CubeGeometry( 1,1,1 ), new THREE.MeshNormalMaterial() );
  	this._playerPos = new THREE.Vector3(1,1,1);
	this._player.position.x=this._playerPos.x;
	this._player.position.y=this._playerPos.y;
	this._player.position.z=this._playerPos.z;
	this._addScene = false;
  }
}