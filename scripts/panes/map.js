define(function(require) {

  var paneManager;
  var paneUtil = require('../paneUtil');
  var art = require('../artwork');

  function init() {
    paneUtil.createArtDiv(art['map']['dorm'],'dorm','map',60,30);
    paneUtil.createArtDiv(art['map']['bar'],'bar','map',30,20);
    paneUtil.createArtDiv(art['map']['gym'],'gym','map',70,10);
    paneUtil.createArtDiv(art['map']['frat'],'frat','map',5,2);
  }


  function setPaneManager(paneManager) {
    this.paneManager = paneManager;
    var mePanes = this.paneManager;
    $("#bar").click(function() { mePanes.activatePane('boBar'); });
    $("#boLibrary").click(function() { mePanes.activatePane('boLibrary'); });
  }

 function hide() {
    $('div#map').hide();
 }

 function draw() {
    $('div#map').show();
  }

  init();

  return {
    draw: draw,
    hide: hide,
    setPaneManager: setPaneManager
  };
});
