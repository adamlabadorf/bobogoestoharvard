define(function(require) {
  var bobo = require('bobo');

  var paneManager;
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
     $("#boBar_exit").click(function() { mePanes.activatePane('map'); });

     for(var drinkName in DRINK_DATA) {
       x = function(drinkName) {
         $("#boBar_" + drinkName).click(
           function() {_drink(drinkName)});
       };
       x(drinkName);
     }
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
    bobo.changeStat('boCharm', drink['charmImpact']);
    bobo.changeStat('boDrunkitude', 1);
    bobo.changeStat('boTurn', 1);
  }

   init()
 
   return {
     draw: draw,
     hide: hide,
     setPaneManager: setPaneManager,
     tick: tick
   };
});
