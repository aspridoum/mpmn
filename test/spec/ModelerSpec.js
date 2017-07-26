var Helper = require('../Helper');

Helper.addStyle('html, body { height: 100%; padding: 0; margin: 0; }');

Helper.addStyle('.icon-red { background: red !important; }');

var fs = require('fs');


var Modeler = require('bpmn-js/lib/Modeler');


describe('modeler / mpmn version', function() {

  var diagram = fs.readFileSync(__dirname + '/diagram.bpmn', 'utf-8');


  function withModeler(config, fn) {

    return function(done) {

      var modeler = new Modeler(config);

      modeler.attachTo('body');

      modeler.importXML(diagram, function(err) {
        if (err) {
          done(err);
        }

        modeler.invoke(fn);

        done();
      });

    };
  }


  describe('just modeler', function() {

    function inject(fn) {
      return withModeler({}, fn);
    }


    it('should allow me to render a process', inject(function() {

    }));

  });


  describe('custom rules (resize all)', function() {

    var customRulesModule = require('../../lib/resize-all-rules');

    function inject(fn) {

      var config = {
        additionalModules: [ customRulesModule ]
      };

      return withModeler(config, fn);
    }


    it('should allow to resize all elements', inject(function() {

    }));

  });


  describe('custom colors', function() {

    var colorPickerModule = require('../../lib/color-picker');

    function inject(fn) {

      var config = {
        additionalModules: [ colorPickerModule ]
      };

      return withModeler(config, fn);
    }


    it('should allow to resize all elements', inject(function() {

    }));

  });


  describe('draw', function() {

    var storageDrawModule = require('../../lib/storage/draw');

    function inject(fn) {

      var config = {
        additionalModules: [ storageDrawModule ]
      };

      return withModeler(config, fn);
    }


    it('should render storage', inject(function() {

    }));

  });


  describe('palette', function() {

    var nyanPaletteModule = require('../../lib/storage/palette');

    function inject(fn) {

      var config = {
        additionalModules: [ storagePaletteModule ]
      };

      return withModeler(config, fn);
    }


    it('should create storage from palette', inject(function() {

    }));

  });


  describe.only('combined', function() {

    var storagePaletteModule = require('../../lib/storage/palette');
    var storageDrawModule = require('../../lib/storage/draw');
    var colorPickerModule = require('../../lib/color-picker');
    var resizeAllModule = require('../../lib/resize-all-rules');

    function inject(fn) {

      var config = {
        additionalModules: [
          storagePaletteModule,
          storageDrawModule,
          colorPickerModule,
          resizeAllModule
        ]
      };

      return withModeler(config, fn);
    }


    it('should create storage from palette', inject(function() {

    }));

  });
});
