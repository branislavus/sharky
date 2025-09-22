class JellyFishYellow extends MovableObject {
    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
    ]

    img;

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.x = Math.random() * 500;
        this.y = 400;
        this.height = 40;
        this.width = 40;
    }
} 
