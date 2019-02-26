let path = require('path');
let url = require('url');
let debMenuTemplate = require('./debugMenuTemplate');

class main{
	constructor()
	{
		this.mainWindow;
		this.init();
		if(process.env.NODE_ENV !=='production')
			this.addMenu();
	}
	init()
	{
		this.mainWindow = new debMenuTemplate.BrowserWindow({});
	  this.mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, '../../mainWindow.html'),
		protocol: 'file:',
		slashes:true
	  }));
	  this.mainWindow.on('closed', function(){
		debMenuTemplate.app.quit();
	  });
	}
	addMenu()
	{
		if(process.env.NODE_ENV !=='production')
		{
			const mainMenu = debMenuTemplate.Menu.buildFromTemplate(debMenuTemplate.debugMenuTemplate);
			debMenuTemplate.Menu.setApplicationMenu(mainMenu);
		}
	}
}

module.exports = main;