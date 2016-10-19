define(function(require) {
  var bobo = require('bobo'),
      statDeps;

  function init() {
      bobo.onModelUpdate(_update)
      _update();
  }

  function _update(stat, delta) {
    $("#boStat_boPoints").text(Math.round(bobo.state('boPoints')));
    $("#boStat_boCharm").text(Math.round(bobo.state('boCharm')));
    $("#boStat_boConquests").text(Math.round(bobo.state('boConquests')));

    $("#boStat_boMoves").text(Math.round(bobo.state('boMoves')));
    $("#boStat_boKnowledge").text(Math.round(bobo.state('boKnowledge')));
    $("#boStat_boAcademicCredits").text(Math.round(bobo.state('boAcademicCredits')));

    $("#boStat_boBucks").text(Math.round(bobo.state('boBucks')));

    var strength = Math.round(bobo.state('boStrength'));
    if(bobo.state('boIsTired')) {
        strength += ' SOTIRED';
    } else if(bobo.state('boTiredness')>0) {
        console.log('huh?');
        strength += ' (boTiredness: '+Math.round(bobo.state('boTiredness'))+')';
    }
    $("#boStat_boStrength").text(strength);
    $("#boStat_boDrunkitude").text(Math.round(bobo.state('boDrunkitude')));

    if(delta > 0) {
        $("#boCell_" + stat).css('background', '#008800');
    } else {
        $("#boCell_" + stat).css('background', '#880000');
    }
    setTimeout(function() {
            $("#boCell_" + stat).css('background', '');
        }, 3000);
  }

  return {
    init: init
  };
});
