class MovableObject extends DrawableObject {

    speed = 4;
    otherDirection = false;
    energy = 100;
    isDead = false;
    lastHit = 0;
    bubbleMove = 0.001;






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

    applyLigthMaterials() {
        setInterval(() => {
            this.bubbleMove += 0.05;
            
            if (this.bubbleMove < 1) {
                // Anfangs: Nach unten fallen (kurz)
                this.y += this.bubbleMove;
            } else {
                // Dann: Nach oben steigen
                this.y -= (this.bubbleMove - 1.5);
            }
            
            // Optional: Max Speed begrenzen
            if (this.bubbleMove > 4) {
                this.bubbleMove = 4;
            }
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