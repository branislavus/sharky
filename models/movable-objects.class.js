class MovableObject {
    x;
    y;
    height;
    width;
    img;
    speed = 4;
    imageCache = {};
    otherDirection = false;




    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    // animate(element) {
    //     setInterval(() => {
    //         let i = this.currentImage % element.length;
    //         let path = element[i];
    //         this.img = this.imageCache[path];
    //         this.currentImage++;
    //     }, 1000);
    // }

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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {

        if (this instanceof Character || this instanceof JellyFishYellow || this instanceof JellyFishPurple || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

    }

    isColliding(movObj){
        return this.x + this.width > movObj.x &&
               this.y + this.height > movObj.y &&
               this.x < movObj.x + movObj.width &&
               this.y < movObj.y + movObj.height;
    }
}