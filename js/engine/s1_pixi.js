(function(w, u){
    // test
    var s1_pixi = function(id, options){
        
        var defaults    = {
            width:  640,
            height: 480
        };
        
        options = Object.assign(defaults, options);
        
        var el  = w.document.getElementById(id);
    };
    
    w.s1_pixi   = s1_pixi;
})(window);