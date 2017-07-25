var fs = require('fs');

var embeddedCatImage = fs.readFileSync(__dirname + '/triangle.png', 'base64');

module.exports.dataURL = 'data:image/png;base64,' + embeddedTriangleImage;
