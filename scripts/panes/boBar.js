define(function(require) {

  var paneManager;

  function init() {
  }

  function setPaneManager(paneManager) {
    this.paneManager = paneManager;
  }

 function hide() {
    $('div#boBar').hide();
 }

 function draw() {
    $('div#boBar').show();
  }

  init()

  return {
    draw: draw,
    hide: hide,
    setPaneManager: setPaneManager
  };
});
