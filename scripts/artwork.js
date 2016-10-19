define(function(require) {

  var art = {};

  art['map'] = require('scripts/artwork/map.js');
  art['gym'] = require('scripts/artwork/gym.js');

  createSprite = function(collection,name,loop=true) {
    var sprite = {
        art: art[collection][name],
        collection: collection,
        name: name,
        current_i: 0,
        current: art[collection][name][0],
        running: loop,
        run: function(run) {
            this.running = run;
        },
        step: function(f=undefined) {
            // set the sprite step function if passed
            if(f) {
                this._step_f = f;
            }
            // call step function if it was provided at some point
            if(this._step_f) {
                this._step_f(this);
            }
        },
        next: function() { // moves to next image in art sequence
            if(this.running) {
              this.current_i = Math.min(this.current_i+1,this.art.length);
              if(this.current_i == this.art.length) {
                this.current_i = 0;
                if(!loop) {
                    this.run(false);
                }
              }
            }
            this.current = this.art[this.current_i];
            this.step();
            return this.current;
        }
    };
    return sprite;
  }

  return {
    createSprite: createSprite
  };

});
