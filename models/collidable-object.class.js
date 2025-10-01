class CollidableObject extends MovableObject {

    offSet = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }


    isCollidingOffSet(){
         return this.x + this.width - this.offSet.right > movObj.x + movObj.offSet.left &&
               this.y + this.height - this.offSet.bottom > movObj.y + movObj.offSet.top &&
               this.x + this.offSet.left < movObj.x + movObj.width -movObj.offSet.right &&
               this.y + this.offSet.top < movObj.y + movObj.height - movObj.offSet.bottom;
    }

}