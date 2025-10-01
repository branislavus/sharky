class StatusbarHealth extends MovableObject {
    IMAGES_HEALTH = [
        'img/4. Marcadores/orange/0_  copia.png',
        'img/4. Marcadores/orange/20_ copia 2.png',
        'img/4. Marcadores/orange/40_  copia.png',
        'img/4. Marcadores/orange/60_  copia.png',
        'img/4. Marcadores/orange/80_  copia.png',
        'img/4. Marcadores/orange/100_  copia.png',
    ]

    img;
    x = 4;
    y = 4;
    height = 50;
    width = 200;
    percentage = 100;

    constructor() {
        super();
        this.loadImage('img/4. Marcadores/orange/100_  copia.png');
        this.loadImages(this.IMAGES_HEALTH);
    }

    setPercentage(percentage) {
        this.percentage = percentage;

        //to be continued ----->
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
        } else (this.percentage > 0){
            return 0;
        }

    }
}