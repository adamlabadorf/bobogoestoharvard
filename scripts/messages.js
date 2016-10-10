define(function(require) {
  var content = []

  function init() {
    _tick()
  }

  function msg(text) {
    content.push(text);
    _render();
  }

  function _render() {
    $("#messageFrame").html(content.join("<br>"));
  }

  function _tick() {
    content = content.slice(1, content.length);
    _render();
    setTimeout(_tick, 5000);
  }

  return {
      init: init
    , msg: msg
  };
});
