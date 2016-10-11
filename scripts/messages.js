define(function(require) {
  var content = []
  var log_stamp = 0;

  function init() {
  }

  function msg(text) {
    log_stamp += 1;
    prefix = "[ BoBo Time: "+log_stamp+" ] ";
    $("#messageLog").prepend("<span class='log'>"+prefix+text+"</span><br/>");
  }

  return {
      init: init
    , msg: msg
  };
});
