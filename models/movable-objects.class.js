class MovableObject extends DrawableObject{

    speed = 4;
    otherDirection = false;
    energy = 100;
    isDead = false;
    lastHit = 0;



   

    drawFrame(ctx) {

        if (this instanceof Character || this instanceof JellyFishYellow || this instanceof JellyFishPurple || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

    }

    moveRight() {
        this.x += 1 * this.speed;
    }

    moveLeft() {
        this.x -= 1 * this.speed;
    }

    moveUp() {
        this.y -= 1 * this.speed;
    }

    moveDown() {
        this.y += 1 * this.speed;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround()) this.y += 0.5;
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 300;
    }


    isColliding(movObj) {
        return this.x + this.width > movObj.x &&
            this.y + this.height > movObj.y &&
            this.x < movObj.x + movObj.width &&
            this.y < movObj.y + movObj.height;
    }

    isCharacterDead() {
        return this.energy == 0;
    }

    hit() {
        this.energy -= 5;
        this.isHurt();
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }
}