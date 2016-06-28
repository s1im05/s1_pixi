class s1_pixi{

    constructor (id, options){
        let defaults    = {
            width:  640,
            height: 480,
            background: 0x000000,
            showFps: false
        };

        this.id         = id;
        this.options    = Object.assign(defaults, options);
        this.el         = document.getElementById(id);

        if (this.el === null){
            throw new Error('Can\'t find container');
        } else {
            this.resize()._pixiInit();
        }
    };

    resize(){
        this.el.style.width = this.options.width + 'px';
        this.el.style.height = this.options.height + 'px';

        return this;
    };

    _pixiInit(){
        this.renderer   = PIXI.autoDetectRenderer(this.options.width, this.options.height, {backgroundColor: this.options.background});
        this.el.appendChild(this.renderer.view);
        this.stage      = new PIXI.Container();

        this._fps       = {
            text: new PIXI.Text('0 fps', {font : '12px Arial', fill : 0xcccccc}),
            count: 0,
            timestamp: new Date().getTime()
        };
        this._fps.text.position.x   = 5;
        this._fps.text.position.y   = 5;

        if (this.options.showFps)
            this.stage.addChild(this._fps.text);

        return this;
    };

    start(){
        requestAnimationFrame(this._update.bind(this));

        return this;
    };

    _update(){
        if (this.options.showFps)
            this._countFps();

        this.renderer.render(this.stage);
        requestAnimationFrame(this._update.bind(this));
    };

    _countFps(){
        this._fps.count++;
        if (new Date().getTime() - this._fps.timestamp >= 1000){
            this._fps.timestamp = new Date().getTime();
            this._fps.text.text = this._fps.count+' fps';
            this._fps.count = 0;
        }
    };
}
