var fs = require('fs');

var embeddedCatImage = fs.readFileSync(__dirname + '/robot.png', 'base64');

module.exports.dataURL = 'data:image/png;base64,' + embeddedRobotImage;
