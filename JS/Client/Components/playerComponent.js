class playerComponent
{
	constructor()
  {
  	this._object = new THREE.Mesh( new THREE.CubeGeometry( 1,1,1 ), new THREE.MeshPhongMaterial() );
  	this._playerPos = new THREE.Vector3(0,0.5,0);
	this._object.position.x=this._playerPos.x;
	this._object.position.y=this._playerPos.y;
	this._object.position.z=this._playerPos.z;
	this._addScene = false;
  }
}