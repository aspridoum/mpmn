var fs = require('fs');

var embeddedHybridImage = fs.readFileSync(__dirname + '/hybrid11.png', 'base64');

module.exports.dataURL = 'data:image/png;base64,' + embeddedHybridImage;
