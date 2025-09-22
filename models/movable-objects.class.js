 class MovableObject {
    x;
    y;
    height;
    width;
    img;


    loadImage(path){
        this.img = new Image();
        this.img.onload = () => {
            console.log('Image loaded:', path);
        };
        this.img.onerror = () => {
            console.error('Failed to load image:', path);
        };
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