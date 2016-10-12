define(function (require) {
  var _state = {},
      _modelObservers = [],
      msg = require('./messages'),
      default_func,
      default_delta_stat,
      interpolate,
      takeBoAction,
      statLimits,
      statDependencies;

  interpolate = function(x,delta_stat) {

      if(x<=delta_stat[0][0]) {
          return delta_stat[0][1];
      } else if(x >= delta_stat[delta_stat.length-1][0]) {
          return delta_stat[delta_stat.length-1][1];
      } else {
          // find the segment corresponding to x
          for(var i=0; i < delta_stat.length-1; i++)  {
              var s_i = delta_stat[i],
                  s_ip1 = delta_stat[i+1];

              if(x >= s_i[0] && x < s_ip1[0]) {
                  var m = (s_ip1[1]-s_i[1])/(s_ip1[0]-s_i[0]),
                      b = s_i[1]-m*s_i[0];
                  return m*x+b;
              }
          }
      }
  }

  default_func = function(statVal,delta_stats=default_delta_stat) {
      return interpolate(statVal,delta_stats);
  }

  function init() {
    _state['boPoints'] = 0;
    _state['boConquests'] = 0;
    _state['boAcademicCredits'] = 0;
    _state['boBucks'] = 100;

    _state['boMoves'] = 200;
    _state['boCharm'] = 50;
    _state['boKnowledge'] = 50;
    _state['boStrength'] = 50;
    _state['boDrunkitude'] = 0;

    statLimits = {
        'boPoints':[-1e10,1e10],
    'boConquests':[0,1e10],
    'boAcademicCredits':[0,1e10],
    'boBucks':[-1e10,1e10],
    'boMoves':[0,1e10],
    'boCharm':[0,200],
    'boKnowledge':[0,200],
    'boStrength':[0,200],
    'boDrunkitude':[0,200]
    }

    // delta_stats is an array of 2-ples that define the inflection points
    // of delta for the output stat
    // the inflection points are [current stat value, stat delta amount]
    // and must be sorted by stat value
    default_delta_stat = [
       [0,0],[50,10],[120,-10],[200,0] 
    ];

    statDependencies = {
      'boStrength': {
              'boCharm': default_delta_stat
      },
      'boKnowledge': {
              'boCharm': default_delta_stat
      },
      'boDrunkitude': {
              'boCharm': default_delta_stat,
              'boStrength': default_delta_stat
      }
    };


  }

  function state(label) {
    return _state[label];
  }

  function setStat(stat,val) {
    if(stat in statLimits) {
       _state[stat] = Math.max(statLimits[stat][0],Math.min(val,statLimits[stat][1]));
    } else {
       _stat[stat] = val;
    }
  }

  function changeStat(label, delta) {
    var oldValue = _state[label];
    setStat(label, _state[label] + delta);
    if(oldValue != _state[label]) {
      msg.msg("+ " + delta + " " + label);
      for(depStat in statDependencies[label]) {
        var stat_delta = interpolate(_state[label],statDependencies[label][depStat]),
            prev_stat = _state[depStat];
        setStat(depStat,_state[depStat]+stat_delta);
        if(_state[depStat] != prev_stat) {
          msg.msg(depStat + " gets "+ stat_delta);
        }
      }
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
      takeBoAction: takeBoAction,
      onModelUpdate: onModelUpdate
  };
});

