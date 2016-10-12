define(function(require) {

  var paneManager;
  var bobo = require('../bobo');

  function setPaneManager(paneManager) {
    this.paneManager = paneManager;
  }

  function init() {
  }

  function hide() {
    $('div#splash').hide();
  }

  function draw() {
    var me = this;
    $('div#gameBover').show();
  }

  function tick() {
  }

  init();

  return {
    draw: draw,
    hide: hide,
    setPaneManager: setPaneManager,
    tick: tick
  };
});
