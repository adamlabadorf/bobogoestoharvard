define(function(require) {

  var paneManager;

  function init() {
  }

  function setPaneManager(paneManager) {
    this.paneManager = paneManager;
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
