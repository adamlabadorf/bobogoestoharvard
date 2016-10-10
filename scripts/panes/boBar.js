define(function(require) {

  var paneManager;

  function init() {
  }

  function setPaneManager(paneManager) {
     this.paneManager = paneManager;
     var mePanes = this.paneManager;
     $("#boBar_exit").click(function() { mePanes.activatePane('map'); });
  }
 
  function hide() {
     $('div#boBar').hide();
  }
 
  function draw() {
     $('div#boBar').show();
   }
 
   init()
 
   return {
     draw: draw,
     hide: hide,
     setPaneManager: setPaneManager
   };
});
