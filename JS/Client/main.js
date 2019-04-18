class mainLoader
{
	constructor(origin = "JS\\")
	{
		let currentLoader = this;
		this.origin = origin;
		this.scripts=[	"ecsMain",
						"Entitys\\entity",
						"Components\\renderComponent","Components\\cameraComponent","Components\\sceneComponent","Components\\playerComponent","Components\\terrainComponent",
						"Components\\changeCameraComponent","Components\\moveDownComponent","Components\\moveLeftComponent","Components\\moveRightComponent","Components\\moveUpComponent",
						"Components\\pointLightComponent","Components\\ambientLightComponent","Components\\directionalLightComponent","Components\\spotLightComponent",
						"Components\\addSceneComponent","Components\\planeGeometryComponent","Components\\meshLoaderComponent","Components\\groupComponent",
						"Components\\Textures\\grassOneComponent","Components\\textureLoaderComponent","Components\\UI\\mainMenuComponent",
						"Systems\\renderingSystem","Systems\\addObjectSystem","Systems\\eventsSystem","Systems\\moveSystem","Systems\\changeCameraSystem",
						"Systems\\meshLoadingSystem","Systems\\textureLoadingSystem","Systems\\mapLoadingSystem","Systems\\mainMenuDisplaySystem"];
		this.ressources=[	"3DModels", "textures", "map"	];
		if(this.origin === "JS\\")
		{
			this.loadRessources();
			this.loadScripts();
			window.addEventListener("load",function(){
				currentLoader.run();
			});
		}
	}
	loadRessources()
	{
		for(let res of this.ressources)
		{
			let currentRessource = document.createElement('script');
			currentRessource.addEventListener("load",function(){});
			currentRessource.src=this.origin+"Client\\Ressources\\"+res+".json";
			document.body.appendChild(currentRessource);
		}
	}
	
	loadScripts()
	{
		for(let scr of this.scripts)
		{
			let currentRessource = document.createElement('script');
			currentRessource.addEventListener("load",function(){});
			currentRessource.src=this.origin+"Client\\"+scr+".js";
			document.body.appendChild(currentRessource);
		}
	}
	
	run()
	{
		let init = new ecsMain();
		init.init();
	}
}