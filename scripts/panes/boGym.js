define(function(require) {

  var paneUtil = require('../paneUtil'),
      art = require('../artwork'),
      bobo = require('../bobo'),
      boExercises = {
        'bench': {
            pos:[30,9]
            ,reps: 0
        },
        'squat': {
            pos:[80,6]
            ,reps: 0
        },
        'cycle': {
            pos:[15,21]
            ,reps: 0
        },
        'swim': {
            pos:[60,26]
            ,reps: 0
        }
      },
     sprites = {};

  function init() {

    paneUtil.placeDiv('boGymReps',2,2);
    paneUtil.placeDiv('boGymStatus',35,3);

    $.each(boExercises,function(k,v) {
      var sprite = art.createSprite('gym',k,loop=false);
      sprite.pos = v.pos;
      sprites[k] = sprite;
      var spriteDiv = paneUtil.createArtDiv(sprite.current,k,'boGym',v.pos[0],v.pos[1]);
      spriteDiv.click(function() {
        if(!bobo.state('boIsTired')) {
            sprite.run(true);
            bobo.changeStat('boStrength',1);
            bobo.changeStat('boMoves',-1);
            bobo.changeStat('boTiredness',1);
            boExercises[k].reps += 1;
            $('#boGym_'+k).html(boExercises[k].reps);
        }
      })
    });
  }

  function setPaneManager(paneManager) {
    gym.paneManager = paneManager;
    var mePanes = gym.paneManager;
    $("#boGym_exit").click(function() { mePanes.activatePane('boMap'); });
  }

 function hide() {
    $('div#boGym').fadeOut();
 }

 function draw() {
    $('div#boGym').fadeIn();
  }

  function tick() {
    var boMotivation = "Get your boButt moving!",
        tiredness = bobo.state('boTiredness'),
        maxTiredness = bobo.state('boMaxTiredness');
    if(bobo.state('boIsTired')) {
        boMotivation = "You're boBurnt out! Take a boBreak at the boBar or boSomething!";
    } else if(tiredness > 0 && tiredness < 0.5*maxTiredness) {
        boMotivation = "Oooooh yeah, boBeefin' and boBuffin'."
    } else if(tiredness > 0.5*maxTiredness && tiredness < maxTiredness) {
        boMotivation = "Feel the boBurn!!!";
    }
    $('#boGymStatus').html(boMotivation);

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
