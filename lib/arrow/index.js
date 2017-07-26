var fs = require('fs');

var embeddedArrowImage = fs.readFileSync(__dirname + '/arrow1.png', 'base64');

module.exports.dataURL = 'data:image/png;base64,' + embeddedArrowImage;
