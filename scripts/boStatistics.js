define(function(require) {
  var bobo = require('bobo');

  function init() {
      bobo.onModelUpdate(_update)
      _update();
  }

  function _update() {
    $("#boStat_boPoints").text(bobo.state()['boPoints']);
    $("#boStat_boBucks").text(bobo.state()['boBucks']);
    $("#boStat_boConquests").text(bobo.state()['boConquests']);
    $("#boStat_boAcademicCredits").text(bobo.state()['boAcademicCredits']);
    $("#boStat_boStrength").text(bobo.state()['boStrength']);
    $("#boStat_boCharm").text(bobo.state()['boCharm']);
    $("#boStat_boDrunkitude").text(bobo.state()['boDrunkitude']);
    $("#boStat_boTurn").text(bobo.state()['boTurn']);
  }

  return {
    init: init
  };
});
