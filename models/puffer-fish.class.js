class PufferFish extends MovableObject {

    IMAGES_SWIM_ALL = [
        [
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
        ],
        [
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png'
        ],
        [
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png'
        ]
    ]


    img;
    speed = 0.05;
    currentImage = 0;
    animationState = 0; // 0=SWIM, 1=TRANSITION, 2=BUBBLESWIM
    stateTimer = 0;
    stateDuration = 2000; // 2 Sekunden pro State
    direction = 1; // 1 = vorwärts (0→1→2), -1 = rückwärts (2→1→0)

    constructor() {
        super();
        this.loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        // Lade alle Animation-Arrays
        this.IMAGES_SWIM_ALL.forEach(imageArray => {
            this.loadImages(imageArray);
        });
        this.x = Math.random() * 500 + 300;
        this.y = Math.random() * 400;
        this.height = 40;
        this.width = 40;
        this.speed += Math.random();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
            this.otherDirection = false;
        }, 1000 / 60);

        // Animation Rendering (schnell)
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM_ALL[this.animationState]);
        }, 150);
        
        // State Management (langsam)
        setInterval(() => {
            this.stateTimer += 100;
            
            if (this.stateTimer >= this.stateDuration) {
                // Pingpong-Pattern: 0→1→2→1→0→1→2→1→0...
                this.animationState += this.direction;
                
                // Richtung umkehren bei den Enden
                if (this.animationState === 2) {
                    this.direction = -1; // Rückwärts
                } else if (this.animationState === 0) {
                    this.direction = 1;  // Vorwärts
                }
                
                this.stateTimer = 0;
                console.log('Animation State changed to:', this.animationState, 'Direction:', this.direction);
            }
        }, 100);
    }
}