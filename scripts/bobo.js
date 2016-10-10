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

  function state() {
    return _state;
  }

  function changeStat(label, delta) {
    _state[label] += delta;
    _invokeModelObservers(label, delta);
    msg.msg("+ " + delta + " " + label);
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

