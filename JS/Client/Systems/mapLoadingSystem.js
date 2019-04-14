class mapLoadingSystem
{
	constructor()
	{
		if(!mapLoadingSystem._instance)
		{
			this._entityComponents = {};
			this._prevLength = 0;
			this._injectedSystems = {};
			mapLoadingSystem._instance = this;
		}
		return mapLoadingSystem._instance;
	}
	
	execute()
	{
		let mapLoad = this;
		if(Object.keys(mapToImport).length>this._prevLength)
			for( let current in mapToImport)
				if(typeof mapToImport[current].material !== 'undefined')
				{
					this._entityComponents._textureLoaderComponent[0]._textureLoader.load(
						texturesToImport[mapToImport[current].material],
						function(texture){ 
							if(typeof mapToImport[current].type !== 'undefined')
								mapToImport[current]["_object"] = new THREE.Mesh(
									new THREE[mapToImport[current].type](
										mapToImport[current].size.x,
										mapToImport[current].size.y,
										mapToImport[current].size.z
									)
								);
							mapToImport[current]._object.material = new THREE.MeshPhongMaterial( { map:texture});
							mapToImport[current]._object.position.set(	mapToImport[current].position.x,
													mapToImport[current].position.y,
													mapToImport[current].position.z
												);
							mapLoad._entityComponents._groupComponent[0]._object.add(mapToImport[current]._object);
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
		const inst = new mapLoadingSystem();
		return inst;
	}
}