class JellyFishYellow extends MovableObject {
    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ]

    img;
    currentImage = 0;

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.x = Math.random() * 500 + 300;
        this.y = Math.random() * 100 + 300;
        this.height = 40;
        this.width = 40;
        this.speed = ( Math.random() * 2 - 1.5)/3;
        console.log(' this.speed',  this.speed);
        
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.moveUp();
        }, 1000 / 60);

    
        setInterval(() => {
             if (this.leftOrRight() >= 5) {
               setInterval(() => {
                 this.moveLeft();
               }, 20);
            } else {
               setInterval(() => {
                 this.moveRight();
               }, 20);
            } 
        }, 2000);
            


        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIM.length;
            let path = this.IMAGES_SWIM[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 150);
    }

     leftOrRight(){
        return Math.round(Math.random() * 10);
     } 
} 
