define(function (require) {
  var boboButt = require('./boboButt');
  var model = require('./model');

  function _drinkABeer() {
    console.log("BoBo is gettin loaded");
    console.log("Bobo has ", model.state()['boboPoints'], " points!");
  }

  function _clickCell(row, col) {
    console.log("Clicked on: ", row, col);
    model.givePoint();
  }

  function _initModules() {
    boboButt.init();
    model.init();
  }

  function main() {
    _initModules();

    $("#drinkABeer").click(_drinkABeer);
    boboButt.sayHi()

    $("#cell_00").click(function() { _clickCell(0,0); });
  }

  main();
});

