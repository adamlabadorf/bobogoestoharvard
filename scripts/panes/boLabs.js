define(function (require) {

    var paneManager;
    var paneUtil = require('../paneUtil');
    var bobo = require('bobo');

    function init() {
        var buttons = $('div#boLabs button').each(
            function(i,elem) {
                var button_parts = $(elem).attr('id').split('_');
                if(button_parts.length == 3) {
                    var sign = button_parts[2][0] == "p" ? 1 : -1,
                        delta = sign*button_parts[2].slice(1,button_parts[2].length);
                    $(elem).click(function() {
                        bobo.changeStat(button_parts[1],delta);
                    });
                }
            });
    }

    function setPaneManager(paneManager) {
      this.paneManager = paneManager;
      var mePanes = this.paneManager;
      $("#boLabs_exit").click(function() { mePanes.activatePane('map'); });
    }

    function draw() {
        $('div#boLabs').show();
    }

    function hide() {
        $('div#boLabs').hide();
    }

    function tick() {
    }

    init()

  return {
    draw: draw,
    hide: hide,
    setPaneManager: setPaneManager,
    tick: tick
  };

});
