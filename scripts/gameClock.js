define(function(require) {
  var pm = require('paneManager'),
      bobo = require('bobo'),
      dm = require('boDrunkManager');

  function init() {
    _tick()
  }

  function _tick() {
    var currentPane = pm.getCurrentPane();
    if(currentPane != undefined) {
      currentPane.tick();
    }
    bobo.tick();
    setTimeout(_tick, 1000);
  }

  return {
      init: init
  };
});
