define(function(require) {
  var bobo = require('bobo');

  function init() {
  }

  function tick() {
    var drunkitude = bobo.state('boDrunkitude');
    if(drunkitude > 2 && drunkitude < 5) {
        bobo.changeStat('boCharm', 1);
    } else if(drunkitude > 5) {
        bobo.changeStat('boCharm', -1);
    }
    bobo.changeStat('boDrunkitude', -1);
  }

  return {
    tick: tick
  };
});
