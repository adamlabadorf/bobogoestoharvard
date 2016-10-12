define(function(require) {

  var art = {};

  art['map'] = require('scripts/artwork/map.js');

  createSprite = function(collection,name,loop=true) {
    var sprite = {};
    sprite.art = art[collection][name];
    sprite.current_i = 0;
    sprite.current = sprite.art[sprite.current_i];
    sprite.step = function() {
      // override this if you need to add more behavior to sprite on step
    }
    sprite.next = function() { // moves to next image in art sequence
      if(loop) {
        this.current_i = (this.current_i+1)%this.art.length;
      } else {
        this.current_i = Math.min(this.current_i+1,this.art.length);
      }
      this.current = this.art[this.current_i];
      this.step();
      return this.current;
    }
    return sprite;
  }

  return {
    createSprite: createSprite
  };

});
