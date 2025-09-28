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
        console.log('moving right!');
        this.x += 1 * this.speed;
    }

    moveLeft() {
        console.log('moving left!');
        this.x -= 1 * this.speed;
    }

    moveUp() {
        console.log('moving Up!');
        this.y -= 1 * this.speed;
    }

    moveDown() {
        console.log('moving Down!');
        this.y += 1 * this.speed;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

}