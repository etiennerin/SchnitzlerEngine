let electron = require('electron');

const {app, BrowserWindow, Menu} = electron;

module.exports.debugMenuTemplate = debugMenuTemplate =  [
  {
    label: 'File',
    submenu:[
      {
        label: 'Quit',
        accelerator:process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  },
  {
	label:'Dev Tool',
	submenu:[{
		label:'show devTool',
		accelerator:process.platform=='darwin'?'Command+I':'Ctrl+I',
		click(item,focusedWindow){
			focusedWindow.toggleDevTools();
		}
	},
	{
		role:'reload'
	}]
}
];
module.exports.app=app;
module.exports.BrowserWindow=BrowserWindow;
module.exports.Menu=Menu;