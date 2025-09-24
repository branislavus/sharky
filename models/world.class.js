class World {

    backgroundObjects = [
        new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/L1.png', 0, 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/L2.png', 720, 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/L1.png', 0, 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/L2.png', 720, 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/L1.png', 0, 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/L2.png', 720, 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/L1.png', 0, 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/L2.png', 720, 0),
    ];
    character = new Character();
    enemies = [
        new JellyFishYellow(),
        new JellyFishPurple(),
        new JellyFishYellow(),
        new JellyFishPurple(),
        new JellyFishYellow(),
    ];
    canvas;
    ctx;
    keyboard;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);


        requestAnimationFrame(() => {
            this.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(element => {
            this.addToMap(element);
        });
    }

    addToMap(moveObj) {
        this.ctx.drawImage(moveObj.img, moveObj.x, moveObj.y, moveObj.width, moveObj.height);
    }
}
