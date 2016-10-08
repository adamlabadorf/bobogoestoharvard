define(function(require) {

  var paneManager;

  function init() {
  }

  function setPaneManager(paneManager) {
    this.paneManager = paneManager;
  }

 function hide() {
    $('div#map').hide();
 }

 function draw() {
    $('#cell_00').text();
    $('div#map').show();
  }

  init()

  return {
    draw: draw,
    hide: hide,
    setPaneManager: setPaneManager
  };
});
