class StatusbarHealth extends MovableObject {
    IMAGES_HEALTH = [
        'img/4. Marcadores/Purple/0_ .png',
        'img/4. Marcadores/Purple/20__1.png',
        'img/4. Marcadores/Purple/40_ .png',
        'img/4. Marcadores/Purple/60_ .png',
        'img/4. Marcadores/Purple/80_ .png',
        'img/4. Marcadores/Purple/100_ .png',
    ]

    img;
    x = 4;
    y = 4;
    height = 50;
    width = 200;
    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        console.log('this.percentage :', this.percentage);
        let path = this.IMAGES_HEALTH[this.resolvePercentageIndex()];
        console.log('path :', path);
        
        this.img = this.imageCache[path];
    }

    resolvePercentageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }

    }
}