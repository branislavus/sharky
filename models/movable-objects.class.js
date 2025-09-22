 class MovableObject {
    x;
    y;
    height;
    width;
    img;


    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight(){
        console.log('moving right!');
        
    }

    moveLeft(){
        console.log('moving left!');
        
    }

    moveUp(){
        console.log('moving Up!');
        
    }

    moveDown(){
        console.log('moving Down!');
        
    }
 }