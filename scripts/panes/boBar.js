define(function(require) {
  var bobo = require('bobo');

  var paneManager;

  var timesRegailedByTender = 0;
  var MAX_TIMES_REGAILED_BY_TENDER = 5;

  var DRINK_DATA = {
      'whisky': {
          'cost': 15
        , 'strength': 5
        , 'charmImpact': 1
      }
   ,  'vodka': {
          'cost': 10
        , 'strength': 5
        , 'charmImpact': 1
      }
   ,  'lager': {
          'cost': 5
        , 'strength': 2
        , 'charmImpact': 1
      }
  ,  'cider': {
          'cost': 8
        , 'strength': 2
        , 'charmImpact': 1
      }
   ,  'good': {
          'cost': 30
        , 'strength': 20
        , 'charmImpact': 1
      }
   ,  'bad': {
          'cost': 1
        , 'strength': 1
        , 'charmImpact': -2
      }
  }

  function init() {
  }

  function setPaneManager(paneManager) {
    this.paneManager = paneManager;
    var mePanes = this.paneManager;
    $("#boBar_exit").click(function() { mePanes.activatePane('boMap'); });

    // Hook up the drink buttons
    for(var drinkName in DRINK_DATA) {
      x = function(drinkName) {
        $("#boBar_" + drinkName).click(
          function() {_drink(drinkName)});
      };
      x(drinkName);
    }

    // Hook up the socialize buttons
    $('#boBar_game_line').click(_tryALine);
    $('#boBar_game_tender').click(_talkToTender);
    $('#boBar_game_darts').click(_playDarts);
  }
 
  function hide() {
     $('div#boBar').hide();
  }
 
  function draw() {
     $('div#boBar').show();
   }

  function tick() {
  }

  function _drink(name) {
    var drink = DRINK_DATA[name];
    bobo.changeStat('boBucks', -drink['cost']);
    if(bobo.state('boBucks')>0) {
      bobo.changeStat('boCharm', drink['charmImpact']);
      bobo.changeStat('boDrunkitude', 1);
      bobo.changeStat('boMoves', -1);
      $('#boBar_msg').html("<h2> Gulp! </h2>");
    } else {
      $('#boBar_msg').html("<h2> You don't have the money you knob! </h2>");
    }
  }

  function _tryALine() {
      $('#boBar_msg').html("<h2> That line never works you knob! </h2>");
      bobo.changeStat('boCharm', -1);
      bobo.changeStat('boMoves', -1);
  }

  function _talkToTender() {
      bobo.changeStat('boMoves', -1);
      $('#boBar_msg').html("<h2> That tender regails you with stories of the day! </h2>");
      if(timesRegailedByTender < MAX_TIMES_REGAILED_BY_TENDER) {
        bobo.changeStat('boCharm', 1);
      }

      timesRegailedByTender += 1;
  }

  function _playDarts() {
  }

  init()
 
  return {
    draw: draw,
    hide: hide,
    setPaneManager: setPaneManager,
    tick: tick
  };
});
