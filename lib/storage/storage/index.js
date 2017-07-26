var fs = require('fs');

var embeddedStorageImage = fs.readFileSync(__dirname + '/trianglebold.png', 'base64');

module.exports.dataURL = 'data:image/png;base64,' + embeddedStorageImage;
