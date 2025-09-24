class Character extends MovableObject {
    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ]

    img;
    x = 50;
    y = 200;
    height = 200;
    width = 200;
    currentImage = 0;
    world;

    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.animate();
    }

    animate() {

        setInterval(() => {
            if(this.world.keyboard.RIGHT){
                this.moveRight();
            }
        },1000/60)

        setInterval(() => {
            if(this.world.keyboard.LEFT){
                this.moveLeft();
            }
        },1000/60)

         setInterval(() => {
            if(this.world.keyboard.UP){
                this.moveUp();
            }
        },1000/60)

         setInterval(() => {
            if(this.world.keyboard.DOWN){
                this.moveDown();
            }
        },1000/60)

        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                let i = this.currentImage % this.IMAGES_SWIM.length;
                let path = this.IMAGES_SWIM[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 150);
    }


} 