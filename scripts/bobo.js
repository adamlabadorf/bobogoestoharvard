define(function () {
  var _state = {};
  var _modelObservers = []

  function init() {
    _state['boPoints'] = 0;
    _state['boBucks'] = 100;
    _state['boConquests'] = 0;
    _state['boAcademicCredits'] = 0;
    _state['boStrength'] = 50;
    _state['boCharm'] = 50;
    _state['boDrunkitude'] = 0;
    _state['boTurn'] = 0;
  }

  function state() {
    return _state;
  }

  function changeStat(label, delta) {
    _state[label] += delta;
    _invokeModelObservers();
  }

  function onModelUpdate(observer) {
      _modelObservers.push(observer);
  }

  function _invokeModelObservers() {
    for(var i in _modelObservers) {
        _modelObservers[i]();
    }
  }

    return {
        init: init,
        state: state,
        changeStat: changeStat,
        onModelUpdate: onModelUpdate
    };
});

