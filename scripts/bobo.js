define(function () {
  var _state = {};

  function init() {
    _state['boboPoints'] = 1;
  }

  function state() {
    return _state;
  }

  function givePoint() {
    _state['boboPoints'] += 1;
  }

    return {
        init: init,
        state: state,
        givePoint: givePoint
    };
});

