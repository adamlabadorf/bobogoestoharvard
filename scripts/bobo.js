define(function () {
  var _state = {};
  var _modelObservers = []

  function init() {
    _state['boboPoints'] = 1;
  }

  function state() {
    return _state;
  }

  function givePoint() {
    _state['boboPoints'] += 1;
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
        givePoint: givePoint,
        onModelUpdate: onModelUpdate
    };
});

