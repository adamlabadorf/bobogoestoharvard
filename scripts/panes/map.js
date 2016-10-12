define(function(require) {

  var map = {};
  var paneUtil = require('../paneUtil');
  var art = require('../artwork');
  var birdPos = [0,0];
  var spriteMap = {
        'dorm': [60,20]
        ,'bar': [30,12]
        ,'gym': [70,8]
        ,'library': [20,23]
        ,'frat': [5,2]
        ,'labs': [82,23]
        ,'birds': [0,1]
      },
     sprites = {};

  function init() {
    $.each(spriteMap,function(k,v) {
      var sprite = art.createSprite('map',k);
      sprite.pos = v;
      paneUtil.createArtDiv(sprite.current,k,'map',v[0],v[1]);
      sprites[k] = sprite;
    });
    sprites['birds'].step = function() {
      this.pos[0] = (this.pos[0]+1)%(paneUtil.grid_size.width-this.art.length);
    };
  }

  function setPaneManager(paneManager) {
    map.paneManager = paneManager;
    var mePanes = map.paneManager;
    $("#bar").click(function() { mePanes.activatePane('boBar'); });
    $("#library").click(function() { mePanes.activatePane('boLibrary'); });
    $("#labs").click(function() { mePanes.activatePane('boLabs'); });
  }

 function hide() {
    $('div#map').fadeOut();
 }

 function draw() {
    $('div#map').fadeIn();
  }

  function tick() {
    $.each(sprites, function(label,sprite) {
      sprite.next()
      paneUtil.updateArtDiv(sprite.current,label,sprite.pos[0],sprite.pos[1]);
    });
  }

  init();

  return {
    draw: draw,
    hide: hide,
    setPaneManager: setPaneManager,
    tick: tick
  };
});
