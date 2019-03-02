class cameraComponent
{
	constructor()
	{
		this._camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
		this._pos = new THREE.Vector3(-10,2,0);
		this._camera.position.x = this._pos.x;
		this._camera.rotation.x = -Math.PI/16;
		this._camera.position.y = this._pos.y;
		this._camera.position.z = this._pos.z;
	}
}