define(function(require) {

  var paneManager;
  var paneUtil = require('../paneUtil');

  function init() {
    console.log(this.paneManager);
  }

  function setPaneManager(paneManager) {
    this.paneManager = paneManager;

    var mePanes = this.paneManager;
    $("#boBar").click(function() { mePanes.activatePane('boBar'); });
    $("#boLibrary").click(function() { mePanes.activatePane('boLibrary'); });

  }

 function hide() {
    $('div#map').hide();
 }

 function draw() {
    $('#cell_00').text();
    $('div#map').show();
  }

  var dorm = [" ______________",
              "/____________ /|",
              "|   _    _   | |",
              "|  | |  | |  | |",
              "|  |_|  |_|  | |",
              "|     __     | |",
              "|    |  |    | /",
              "|____|__|____|/"]

  paneUtil.createArtDiv(dorm.join('\n'),'dorm','map',60,60);

  init();

  return {
    draw: draw,
    hide: hide,
    setPaneManager: setPaneManager
  };
});
