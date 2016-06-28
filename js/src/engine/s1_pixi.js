/*jshint esversion: 6 */
(function(w, u){

    class s1_pixi {
       constructor (id, options) {
            let defaults    = {
                width:  640,
                height: 480
            };

            this.id         = id;
            this.options    = Object.assign(defaults, options);
        }
    }
    
    w.s1_pixi   = s1_pixi;
})(window);


console.log(new s1_pixi('my_canvas', {width: 100}));