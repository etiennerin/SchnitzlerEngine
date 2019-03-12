class meshLoadingSystem
{
	constructor()
	{
		if(!meshLoadingSystem._instance)
		{
			this._entityComponents={};
			this._currentMeshEntries = 0;
			meshLoadingSystem._instance = this;
		}
		return meshLoadingSystem._instance;
	}
	
	execute()
	{
		let meshLoad = this;
		if(this._currentMeshEntries<Object.keys(meshesToImport).length)
			for(let currentMesh in meshesToImport)
				this._entityComponents._meshLoaderComponent[0]._meshLoader.load(meshesToImport[currentMesh].path,function(geometry)
					{
						/*let mesh = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial({}));*/
						geometry.position.set(	meshesToImport[currentMesh].position.x,
												meshesToImport[currentMesh].position.y,
												meshesToImport[currentMesh].position.z
												);
						geometry.scale.x = geometry.scale.y = geometry.scale.z = 0.01;
						meshLoad._entityComponents._groupComponent[0]._object.add(geometry);
					},
					function ( xhr ) {
						console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
					},
					function ( error ) {
						console.log( 'An error happened' + error );
					}
				);
		this._currentMeshEntries = Object.keys(meshesToImport).length;
	}
	
	static getInstance()
	{
		const inst = new meshLoadingSystem();
		return inst;
	}
}