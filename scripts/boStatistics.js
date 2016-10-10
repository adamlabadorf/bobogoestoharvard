define(function(require) {
  var bobo = require('bobo');

  function init() {
      bobo.onModelUpdate(_update)
      _update();
  }

  function _update(stat, delta) {
    $("#boStat_boPoints").text(bobo.state()['boPoints']);
    $("#boStat_boCharm").text(bobo.state()['boCharm']);
    $("#boStat_boConquests").text(bobo.state()['boConquests']);

    $("#boStat_boTurn").text(bobo.state()['boTurn']);
    $("#boStat_boKnowlege").text(bobo.state()['boKnowlege']);
    $("#boStat_boAcademicCredits").text(bobo.state()['boAcademicCredits']);

    $("#boStat_boBucks").text(bobo.state()['boBucks']);
    $("#boStat_boStrength").text(bobo.state()['boStrength']);
    $("#boStat_boDrunkitude").text(bobo.state()['boDrunkitude']);

    if(delta > 0) {
        $("#boCell_" + stat).css('background', '#AAFFAA');
    } else {
        $("#boCell_" + stat).css('background', '#FFAAAA');
    }
    setTimeout(function() {
            $("#boCell_" + stat).css('background', '');
        }, 3000);
  }

  return {
    init: init
  };
});
