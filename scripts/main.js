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

    // Stop the game if turns gets to 0
    bobo.onModelUpdate(function(label, delta) {
        if(label == 'boMoves') {
            var moves = bobo.state('boMoves');
            if(moves <= 0) {
                panes.activatePane('gameBover');
            }
        }
    });

    paneUtil.setGridVisible(false);

    //panes.activatePane('splash');
    panes.activatePane('boMap');
    //panes.activatePane('boLibrary');

  }

  main();
});
