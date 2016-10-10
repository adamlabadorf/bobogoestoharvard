define(function(require) {

  var paneManager;

  function init() {
  }

  function setPaneManager(paneManager) {
    this.paneManager = paneManager;
    var mePanes = this.paneManager;
    $("#boLibrary_exit").click(function() { mePanes.activatePane('map'); });
  }

 function hide() {
    $('div#boLibrary').hide();
 }

 function draw() {
    $('div#boLibrary').show();
  }

  init()

  return {
    draw: draw,
    hide: hide,
    setPaneManager: setPaneManager
  };
});
