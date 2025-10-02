class BlowBubble extends MovableObject {

    constructor(x,y){
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.blow();
    }


    blow(){
        this.speedY = 10;d
        this.applyLigthMaterials();
        setInterval(() => {
            this.x += 5;
        }, 1000/25);
    }
}