var fs = require('fs');

var embeddedRobotImage = fs.readFileSync(__dirname + '/robot11.png', 'base64');

module.exports.dataURL = 'data:image/png;base64,' + embeddedRobotImage;
