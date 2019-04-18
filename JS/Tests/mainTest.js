class mainTest extends mainLoader
{
	constructor()
	{
		super("..\\");
		this.tests = [	"terrainComponentSpec","menuComponentSpec","mainMenuDisplaySystemSpec","addSceneComponentSpec",
						"ambientLightComponentSpec","cameraComponentSpec","changeCameraComponentSpec","directionalLightComponentSpec",
						"groupComponentSpec","meshLoaderComponentSpec","moveRightComponentSpec","moveLeftComponentSpec","moveDownComponentSpec",
						"moveUpComponentSpec","planeGeometryComponentSpec","playerComponentSpec","pointLightComponentSpec",
						"rendererComponentSpec","sceneComponentSpec","spotLightComponentSpec","textureLoaderComponentSpec",
						"grassOneComponentSpec"
			];
		this.loadScripts();
		this.loadTests();
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