define(function(require) {
  var bobo = require('bobo'),
      statDeps;

  function init() {
      bobo.onModelUpdate(_update)
      _update();
  }

  function _update(stat, delta) {
    $("#boStat_boPoints").text(bobo.state('boPoints'));
    $("#boStat_boCharm").text(bobo.state('boCharm'));
    $("#boStat_boConquests").text(bobo.state('boConquests'));

    $("#boStat_boMoves").text(bobo.state('boMoves'));
    $("#boStat_boKnowledge").text(bobo.state('boKnowledge'));
    $("#boStat_boAcademicCredits").text(bobo.state('boAcademicCredits'));

    $("#boStat_boBucks").text(bobo.state('boBucks'));
    $("#boStat_boStrength").text(bobo.state('boStrength'));
    $("#boStat_boDrunkitude").text(bobo.state('boDrunkitude'));

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
