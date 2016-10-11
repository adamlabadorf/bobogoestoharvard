define(function (require) {
  var _state = {};
  var _modelObservers = []
  var msg = require('./messages');

  function init() {
    _state['boPoints'] = 0;
    _state['boCharm'] = 50;
    _state['boConquests'] = 0;

    _state['boTurn'] = 0;
    _state['boKnowlege'] = 50;
    _state['boAcademicCredits'] = 0;

    _state['boBucks'] = 100;
    _state['boStrength'] = 50;
    _state['boDrunkitude'] = 0;
  }

  function state(label) {
    return _state[label];
  }

  function changeStat(label, delta) {
    var oldValue = _state[label];
    _state[label] = Math.max(0, _state[label] + delta);
    if(oldValue != _state[label]) {
      msg.msg("+ " + delta + " " + label);
      _invokeModelObservers(label, delta);
    }
  }

  function onModelUpdate(observer) {
      _modelObservers.push(observer);
  }

  function _invokeModelObservers(label, delta) {
    for(var i in _modelObservers) {
        _modelObservers[i](label, delta);
    }
  }

  return {
      init: init,
      state: state,
      changeStat: changeStat,
      onModelUpdate: onModelUpdate
  };
});

