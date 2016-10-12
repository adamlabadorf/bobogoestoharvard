define(function(require) {

  var paneManager;
  var paneUtil = require('../paneUtil');
  var art = require('../artwork');

  function init() {
    paneUtil.createArtDiv(art['map']['dorm'],'dorm','map',60,20);
    paneUtil.createArtDiv(art['map']['bar'],'bar','map',30,12);
    paneUtil.createArtDiv(art['map']['gym'],'gym','map',70,8);
    paneUtil.createArtDiv(art['map']['library'],'library','map',20,23);
    paneUtil.createArtDiv(art['map']['frat'],'frat','map',5,2);
    paneUtil.createArtDiv(art['map']['labs'],'labs','map',82,23);
  }

  function setPaneManager(paneManager) {
    this.paneManager = paneManager;
    var mePanes = this.paneManager;
    $("#bar").click(function() { mePanes.activatePane('boBar'); });
    $("#library").click(function() { mePanes.activatePane('boLibrary'); });
    $("#labs").click(function() { mePanes.activatePane('boLabs'); });
  }

 function hide() {
    $('div#map').hide();
 }

 function draw() {
    $('div#map').show();
  }

  function tick() {
  }

  init();

  return {
    draw: draw,
    hide: hide,
    setPaneManager: setPaneManager,
    tick: tick
  };
});
