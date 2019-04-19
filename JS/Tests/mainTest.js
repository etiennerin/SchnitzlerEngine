class mainTest extends mainLoader
{
	constructor()
	{
		super("..\\");
		this.testRes = ["testTextures","Test3DModels","testMap"];
		this.tests = [	"entitySpec",
						"terrainComponentSpec","menuComponentSpec","grassOneComponentSpec","addSceneComponentSpec",
						"ambientLightComponentSpec","cameraComponentSpec","changeCameraComponentSpec","directionalLightComponentSpec",
						"groupComponentSpec","meshLoaderComponentSpec","moveRightComponentSpec","moveLeftComponentSpec","moveDownComponentSpec",
						"moveUpComponentSpec","planeGeometryComponentSpec","playerComponentSpec","pointLightComponentSpec",
						"rendererComponentSpec","sceneComponentSpec","spotLightComponentSpec","textureLoaderComponentSpec",
						"addObjectSystemSpec","renderingSystemSpec","changeCameraSystemSpec","eventSystemSpec","mapLoadingSystemSpec",
						"meshLoadingSystemSpec","textureLoadingSystemSpec","moveSystemSpec","mainMenuDisplaySystemSpec"
			];
		//this.loadRessources();
		this.loadScripts();
		this.loadTestRessources();
		this.loadTests();
	}
	loadTestRessources()
	{
		for(let tst of this.testRes)
		{
			let currentRessource = document.createElement('script');
			currentRessource.addEventListener("load",function(){});
			currentRessource.src="Assets\\"+tst+".json";
			document.body.appendChild(currentRessource);
		}
	}
	loadTests()
	{
		for(let tst of this.tests)
		{
			let currentRessource = document.createElement('script');
			currentRessource.addEventListener("load",function(){});
			currentRessource.src="Specs\\"+tst+".js";
			document.body.appendChild(currentRessource);
		}
	}
}