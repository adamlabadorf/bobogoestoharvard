define(function(require) {
  var panes = {};
  var currentPane;
  var bobo = require('bobo');
  var initPanes, activatePane;

  initPanes = function() {
    panes['boSplash'] = require('panes/boSplash');
    panes['gameBover'] = require('panes/gameBover');
    panes['boBar'] = require('panes/boBar');
    panes['boLibrary'] = require('panes/boLibrary');
    panes['boMap'] = require('panes/boMap');
    panes['boGym'] = require('panes/boGym');
    panes['boLabs'] = require('panes/boLabs');

    for (paneName in panes) {
      panes[paneName].setPaneManager(this);
      panes[paneName].hide();
    }
  }

  activatePane = function(paneName) {
    try {
      currentPane.hide();
    } catch(err) {
      console.log("Error hiding current pane, probably due to init",err);
    }
    currentPane = panes[paneName];
    currentPane.draw();
  }

  function getCurrentPane() {
      return currentPane;
  }

  return {
    init: initPanes,
    activatePane: activatePane,
    getCurrentPane: getCurrentPane
  };
});
