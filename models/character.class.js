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

    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
    }
} 