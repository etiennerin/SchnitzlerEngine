class renderingSystem
{
	constructor()
	{
		this._entityComponents = {};
	}
	init()
	{
		document.body.appendChild( this._entityComponents._renderComponent[0]._renderer.domElement );
		this._entityComponents._renderComponent[0]._renderer.setSize( window.innerWidth, window.innerHeight );
	}
	execute()
	{
		this._entityComponents._renderComponent[0]._renderer.render( this._entityComponents._sceneComponent[0]._scene, this._entityComponents._cameraComponent[0]._camera );
	}
	static getInstance(){return new renderingSystem();}
}