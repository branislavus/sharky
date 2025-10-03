class World {

    character = new Character();
    statusbarHealth = new StatusbarHealth();
    blowBubble = [];
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    isCollidingWith = "";

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkSwim();
    }

    setWorld() {
        this.character.world = this;
    }

    checkSwim() {
        setInterval(() => {
            this.checkCollisions();
            this.checkBubbleObjects();
        }, 1000);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.isCollidingWith = enemy;
                console.log('this.isCollidingWith = enemy: ', enemy);
                
                this.character.hit();
                // console.log('collision energy: ', this.character.energy);
                this.statusbarHealth.setPercentage(this.character.energy);
            }
        });
    }

    checkBubbleObjects() {
        if (this.keyboard.D) {
            let bubble = new BlowBubble(this.character.x + 130, this.character.y + 100);
            this.blowBubble.push(bubble);
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.character);
        this.addObjectsToMap(this.blowBubble);
        this.addObjectsToMap(this.level.enemies);

        this.addObjectsToMap(this.level.sunLights);

        // space for fixed objects
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusbarHealth);
        this.ctx.translate(this.camera_x, 0);


        this.ctx.translate(-this.camera_x, 0);

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
        if (moveObj.otherDirection) {
            this.flipImage(moveObj);
        }

        moveObj.draw(this.ctx);
        moveObj.drawFrame(this.ctx);

        if (moveObj.otherDirection) {
            this.flipImageBack(moveObj);
        }
    }

    flipImage(moveObj) {
        this.ctx.save();
        this.ctx.translate(moveObj.width, 0);
        this.ctx.scale(-1, 1);
        moveObj.x = moveObj.x * -1;
    }

    flipImageBack(moveObj) {
        moveObj.x = moveObj.x * -1;
        this.ctx.restore();
    }
}
