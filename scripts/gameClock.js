define(function(require) {
  var pm = require('paneManager');
  var dm = require('boDrunkManager');

  function init() {
    _tick()
  }

  function _tick() {
    var currentPane = pm.getCurrentPane();
    if(currentPane != undefined) {
      currentPane.tick();
    }
    dm.tick();
    setTimeout(_tick, 1000);
  }

  return {
      init: init
  };
});
