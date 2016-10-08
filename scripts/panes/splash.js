define(function(require) {

  var paneManager;

  function setPaneManager(paneManager) {
    this.paneManager = paneManager;
  }

  function init() {
  }

  function hide() {
    $('div#splash').hide();
  }

  function draw() {
    var me = this;
    $('div#splash').show();
    $('button#goToMap').click(
      function() { me.paneManager.activatePane('map') }
    );
  }

  init();

  return {
    draw: draw,
    hide: hide,
    setPaneManager: setPaneManager
  };
});
