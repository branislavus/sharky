class MovableObject {
    x;
    y;
    height;
    width;
    img;
    speed = 4;
    imageCache = {};
    



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

    }

    moveLeft() {
        console.log('moving left!');
        setInterval(() => { this.x -= 0.1 * this.speed; }, 1000 / 60);
    }

    moveUp() {
        console.log('moving Up!');

    }

    moveDown() {
        console.log('moving Down!');

    }
}