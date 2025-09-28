class Level {
    backgroundObjects;
    enemies;
    sunLights;
    level_end_x = 2880;

    constructor( backgroundObjects, enemies, sunLights){
        this.backgroundObjects = backgroundObjects;
        this.enemies = enemies;
        this.sunLights = sunLights;
    }
}