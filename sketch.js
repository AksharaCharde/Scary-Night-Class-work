var player;
var girl_running;
var bg, bgImage;
var ghost, ghostImg;

var score = 0;
function preload() {
    girl_running = loadAnimation("Run (1).png", "Run (2).png", "Run (3).png",
        "Run (4).png", "Run (5).png", "Run (6).png", "Run (7).png", "Run (8).png",
        "Run (9).png", "Run (10).png", "Run (11).png", "Run (12).png", "Run (14).png",
        "Run (15).png", "Run (16).png", "Run (17).png",
        "Run (18).png", "Run (19).png", "Run (20).png");
    bgImage = loadImage("bg.jpg");
    ghostImage = loadImage("ghost-standing.png");
}

function setup() {
    createCanvas(1300, 750);
    player = createSprite(100, 588, 10, 10);
    player.addAnimation("girl_running", girl_running);
    player.scale = 0.5;

    ghost = createSprite(1200, 500, 10, 10);
    ghost.addImage("ghost", ghostImage);

    
}

function draw() {
    background(bgImage);
    player.y = World.mouseY;
    drawSprites();
}




