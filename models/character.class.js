class Character extends MovableObject {
    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ]
    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
    ]
    IMAGES_FIN_SLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png',
    ]
    IMAGES_BUBLE_WITH = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ]
    IMAGES_BUBBLE_NO = [
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png',
    ]
    IMAGES_LONG_IDLE = [
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png',

    ]
        IMAGES_LONG_IDLE_START = [
        'img/1.Sharkie/2.Long_IDLE/I1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
    ]




    img;
    x = 50;
    y = 200;
    height = 200;
    width = 200;
    currentImage = 0;
    world;

    constructor() {
        super();
        this.loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_FIN_SLAP);
        this.loadImages(this.IMAGES_BUBBLE_NO);
        this.loadImages(this.IMAGES_BUBLE_WITH);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE_START);
        this.animate();
        this.applyGravity(); 
    }

    animate() {

        setInterval(() => {

            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > - 1000) {
                this.moveLeft();
                this.otherDirection = true;
            }
            if (this.world.keyboard.UP) {
                this.moveUp();
            }
            if (this.world.keyboard.DOWN) {
                this.moveDown();
            }
            this.world.camera_x = -this.x + 100; //character position
        }, 1000 / 60)



        setInterval(() => {
            if (this.world.keyboard.D) {
                this.playAnimation(this.IMAGES_BUBLE_WITH);
            } else if (this.world.keyboard.F) {
                this.playAnimation(this.IMAGES_FIN_SLAP);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_SWIM);
            } else if (!this.isAboveGround()) {
                this.playAnimation(this.IMAGES_LONG_IDLE);
            }
            else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 150);


    }


} 