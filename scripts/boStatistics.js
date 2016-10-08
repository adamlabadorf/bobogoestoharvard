define(function(require) {
  var bobo = require('bobo');

  function init() {
      bobo.onModelUpdate(_update)
  }

  function _update() {
    $("#boStat_boPoints").text(bobo.state()['boboPoints']);
  }

  return {
    init: init
  };
});
