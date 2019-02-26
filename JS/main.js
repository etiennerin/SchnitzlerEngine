let debMenuTemplate = require('./Electron/debugMenuTemplate');
let main = require('./Electron/mainElectron');

process.env.NODE_ENV = 'development';

debMenuTemplate.app.on('ready', function(){
  
	let mmain = new main();
	  // Build menu from template
	  
	  // Insert menu
	
});


	

module.exports = main;