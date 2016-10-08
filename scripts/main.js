define(function (require) {
  var boboButt = require('./boboButt');
  var bobo = require('./bobo');
  var panes = require('./paneManager');

  function _drinkABeer() {
    console.log("BoBo is gettin loaded");
    console.log("Bobo has ", bobo.state()['boboPoints'], " points!");
  }

  function _clickCell(row, col) {
    console.log("Clicked on: ", row, col);
    bobo.givePoint();
  }

  function _initModules() {
    boboButt.init();
    bobo.init();
    panes.init();
  }

  function main() {
    _initModules();

    panes.activatePane('splash');

    $("#drinkABeer").click(_drinkABeer);
    boboButt.sayHi()

    $("#cell_00").click(function() { _clickCell(0,0); });
  }

  main();
});
