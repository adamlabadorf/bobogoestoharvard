define(function (require) {
  var boboButt = require('./boboButt');
  var bobo = require('./bobo');
  var panes = require('./paneManager');
  var statsView = require('./boStatistics');
  var paneUtil = require('./paneUtil');

  function _clickCell(row, col) {
    console.log('Clicked on: ', row, col);
    bobo.givePoint();
  }

  function _initModules() {
    bobo.init();
    boboButt.init();
    panes.init();
    statsView.init();
  }

  function main() {
    _initModules();
    paneUtil.setGridVisible(true);
    panes.activatePane('splash');
    //panes.activatePane('boLibrary');
  }

  main();
});
