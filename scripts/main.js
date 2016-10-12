define(function (require) {
  var boboButt = require('./boboButt');
  var bobo = require('./bobo');
  var panes = require('./paneManager');
  var statsView = require('./boStatistics');
  var paneUtil = require('./paneUtil');
  var msg = require('./messages');
  var clock = require('./gameClock');

  function _clickCell(row, col) {
    console.log('Clicked on: ', row, col);
    bobo.givePoint();
  }

  function _initModules() {
    bobo.init();
    boboButt.init();
    panes.init();
    statsView.init();
    msg.init();
    clock.init();
  }

  function main() {

    _initModules();

    paneUtil.setGridVisible(false);

    //panes.activatePane('splash');
    panes.activatePane('map');
    //panes.activatePane('boLibrary');

  }

  main();
});
