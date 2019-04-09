class textureLoadingSystem
{
	constructor()
	{
		if(!textureLoadingSystem._instance)
		{
			this._entityComponents = {};
			this._prevLength = 0;
			textureLoadingSystem._instance = this;
		}
		return textureLoadingSystem._instance;
	}
	
	execute()
	{
		if(Object.keys(this._entityComponents).length>this._prevLength)
			for( let current in this._entityComponents)
				for(let comp of this._entityComponents[current])
					if(typeof comp._object !== 'undefined')
					{
						this._entityComponents._textureLoaderComponent[0]._textureLoader.load(
							this._entityComponents._grassOneComponent[0]._texture,
							function(texture){
								comp._object.material = new THREE.MeshBasicMaterial( { map:texture});
							},
							function ( xhr ) {
								console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
							},
							function ( err ) {
								console.error( 'Texture could not be loaded :', err );
							}
						);
						this._prevLength++;
					}
	}
	
	static getInstance()
	{
		const inst = new textureLoadingSystem();
		return inst;
	}
}