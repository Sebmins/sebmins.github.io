// Creates canvas
const cvs = document.getElementById("Buca");
const ctx = cvs.getContext("2d");

// Adds border to canvas
cvs.style.border = "1px solid #0ff";
ctx.lineWidth = 3;

// GAME VARIABLES AND CONSTANTS
const BALL_RADIUS = 8;
let LIFE = 3; // PLAYER HAS 3 LIVES
let LEVEL = 1; // PLAYER STARTS 
const MAX_LEVEL = 3;
let GAME_OVER = false;
let shots = 1;

// Create end hole
const hole = {
    x : 70,
    y : 100,
    radius : 30,
}

// Draw hole to canvas
function drawHole(){
    ctx.beginPath();
    ctx.arc(hole.x, hole.y, hole.radius, 0, Math.PI*2);
    ctx.fillStyle = "#2e3548";
    ctx.fill();
    ctx.strokeStyle = "#2e2e2e";
    ctx.stroke();
    ctx.closePath();
}


// Create ball
const ball = {
    x : cvs.width/2,
    y : cvs.height/1.1,
    radius : BALL_RADIUS,
    speed : 4,
    dx : 0,
    dy : 0,
}

// Draw Ball
function drawBall(){
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    ctx.fillStyle = "#ffcd05";
    ctx.fill();
    ctx.strokeStyle = "#2e3548";
    ctx.stroke();
    ctx.closePath();
}

// Move the ball
function moveBall(){
    ball.x += ball.dx;
    ball.y += ball.dy;
}

// Mouse coordinates
const mouse = {
    xPressed : 0,
    yPressed : 0,
    xReleased : 0,
    yReleased : 0
}

// When mouse 1 is clicked
document.addEventListener("mousedown", function(event){
    mouse.xPressed = event.clientX;
    mouse.yPressed = event.clientY;
});

// When mouse 1 is released
document.addEventListener("mouseup", function(event){
    mouse.xReleased = event.clientX;
    mouse.yReleased = event.clientY;
    mouseDistance();
});

// Get distance of drag and change to speed of ball
function mouseDistance(){
    let a = (mouse.xPressed - mouse.xReleased);
    let b = (mouse.yPressed - mouse.yReleased);
    let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    
    if(shots ==1){
        ball.dx = a/10;
        ball.dy = b/10;
        shots--;
    }
}

// Reset ball if life is lost or goes out of bounds
function resetBall(){
    ball.x = cvs.width/2;
    ball.y = cvs.height/1.1,
    ball.dx = 0;
    ball.dy = 0;
    LIFE--;
    shots=1;
}

// check if ball enters hole if so level up
function ballHoleCollision(){
    if(ball.x + ball.radius > hole.x - hole.radius/2 && 
       ball.x - ball.radius < hole.x + hole.radius/2 &&
       ball.y + ball.radius > hole.y - hole.radius/2 &&
       ball.y - ball.radius < hole.y + hole.radius/2){
        levelUp();
    }
}

// DEFAULT SIDE WALLS
const wall1 = {
    x : 5,
    y : 5,
    width : 10,
    height : cvs.height-10,
}
const wall2 = {
    x : cvs.width-15,
    y : 5,
    width : 10,
    height : cvs.height-10,
}

const wall3 = {
    x : 5,
    y : 5,
    width : cvs.width-20,
    height : 10,
}

const wall4 = {
    x : 5,
    y : cvs.height-15,
    width : cvs.width-15,
    height : 10,
}

// LEVEL 1 OBJECTS

const redWall1 = {
    x : 20,
    y : 200,
    width : 150,
    height : 250,
}


// LEVEL 2 OBJECTS

const redWall2 = {
    x : 100,
    y : 200,
    width : cvs.width-200,
    height : 10,
    velocity : 1,
}


// LEVEL 3 OBJECTS

const redWall3 = {
    x : 150,
    y : 250,
    width : 145,
    height : 10,
    velocity : 1,
}

const redWall4 = {
    x : 20,
    y : 95,
    width : 120,
    height : 10,
    velocity : 1,
}

const greenWall1 = {
    x : cvs.width-40,
    y : 350,
    width : 20,
    height : 100,
}

const greenWall2 = {
    x : 20,
    y : 200,
    width : 20,
    height : 100,
}

const greenWall3 = {
    x : cvs.width-40,
    y : 100,
    width : 20,
    height : 100,
}

let walls = [wall3,wall4,wall2,wall1];
let redWalls = [redWall2];

// Draw level 1 contents
function drawLevel1(){
    let w = redWall1;
    ctx.fillStyle = "#d14141";
    ctx.fillRect(w.x,w.y,w.width,w.height);
    ctx.strokeStyle = "#f25757";
    ctx.strokeRect(w.x, w.y, w.width, w.height);
}

// Level 1 colliders
function level1Collision(){
    let w = redWall1;
    if(ball.x+ball.radius>w.x && ball.x -ball.radius < w.x + w.width && ball.y +ball.radius > w.y && ball.y -ball.radius < w.y + w.height){
        resetBall();
    }
}

// Draw level 2 contents
function drawLevel2(){
    hole.x = cvs.width/1.25;
    hole.y = 100;
    hole.radius = 10;
    
    for(i=0;i<redWalls.length;i++){
        let w = redWalls[i];
        ctx.fillStyle = "#d14141";
        ctx.fillRect(w.x,w.y,w.width,w.height);
        ctx.strokeStyle = "#f25757";
        ctx.strokeRect(w.x, w.y, w.width, w.height);
    }
}

// Level 2 colliders
function level2Collision(){
    for(let i = 0; i < redWalls.length; i++){
        let w = redWalls[i];
        if(ball.x+ball.radius>w.x && ball.x -ball.radius < w.x + w.width && ball.y +ball.radius > w.y && ball.y -ball.radius < w.y + w.height){
            resetBall();
        }
    }
    redWall2.x += redWall2.velocity;
    if(redWall2.x > cvs.width-140 || redWall2.x < 30){
        redWall2.velocity= - redWall2.velocity;
    }   
}

let greenWalls = [greenWall1, greenWall2, greenWall3];
let redWalls2 = [redWall3, redWall4];

// Draw level 3 contents
function drawLevel3(){
    hole.x = cvs.width/2;
    hole.y = 100;
    hole.radius = 10;
    
    for(i=0;i<greenWalls.length;i++){
        let w = greenWalls[i];
        ctx.fillStyle = "#6ded71";
        ctx.fillRect(w.x,w.y,w.width,w.height);
        ctx.strokeStyle = "#59c25d";
        ctx.strokeRect(w.x, w.y, w.width, w.height);
    }    
    
    for(i=0;i<redWalls2.length;i++){
        let w = redWalls2[i];
        ctx.fillStyle = "#d14141";
        ctx.fillRect(w.x,w.y,w.width,w.height);
        ctx.strokeStyle = "#f25757";
        ctx.strokeRect(w.x, w.y, w.width, w.height);
    }  
}

// Level 3 colliders
function level3Collision(){
    for(i=0;i<greenWalls.length;i++){
        let w = greenWalls[i];
        if(ball.x + ball.radius > w.x && ball.x - ball.radius < w.x + w.width && ball.y + ball.radius > w.y && ball.y - ball.radius< w.y + w.height){
            ball.dx = -ball.dx*1.5;    
        }    
    }
    
    for(let i = 0; i < redWalls2.length; i++){
        let w = redWalls2[i];
        if(ball.x+ball.radius>w.x && ball.x -ball.radius < w.x + w.width && ball.y +ball.radius > w.y && ball.y -ball.radius < w.y + w.height){
            resetBall();
        }
    }
}

// draw default wals
function drawWalls(){
    for(i=0;i<walls.length;i++){
        let w = walls[i];
        ctx.fillStyle = "#f7f7f7";
        ctx.fillRect(w.x,w.y,w.width,w.height);
        ctx.strokeStyle = "#FFF";
        ctx.strokeRect(w.x, w.y, w.width, w.height);
    }
}

// ball default wall collision
function ballWallCollision(){
    for(let i = 0; i < walls.length; i++){
        let w = walls[i];
        
       if(ball.y + ball.radius > w.y && ball.y - ball.radius < w.y + w.height){
            ball.dy = - ball.dy;
       }
            
        if(ball.x + ball.radius > w.x && ball.x - ball.radius < w.x + w.width ){
            
            ball.dx = - ball.dx;    
        }
    }
}

// show game stats
function showGameStats(text, textX, textY, img, imgX, imgY){
    // draw text
    ctx.fillStyle = "#000";
    ctx.font = "25px Germania One";
    ctx.fillText(text, textX, textY);
    
    // draw image
    ctx.drawImage(img, imgX, imgY, width = 25, height = 25);
}

// game over
function gameOver(){
    if(LIFE <= 0){
        LEVEL=1;
        resetBall;
        LIFE =3;

        hole.x = 70;
        hole.y = 100;
        hole.radius = 30;
    }
}

// level complete onto next
function levelUp(){
    if(LEVEL >= MAX_LEVEL){
        showYouWin();
        GAME_OVER = true;
        return;
    }
    resetBall();
    LIFE=3;
    LEVEL++;
    
}

// Draw function
function draw(){
    
    drawHole();
    
    drawBall();
    
    drawWalls();
    if(LEVEL==1){
        drawLevel1();
    }else if(LEVEL==2){
        drawLevel2();
    }else if(LEVEL==3){
        drawLevel3();
    }
    
    // SHOW LIVES
    showGameStats(LIFE, 25, cvs.height-25, LIFE_IMG, 45, cvs.height-45); 
    // SHOW LEVEL
    showGameStats(LEVEL, cvs.width/2, 50, LEVEL_IMG, cvs.width/2 - 30, 30);
}

// Update function
function update(){
    moveBall();
    ballHoleCollision();
    ballWallCollision();
    
    if(LEVEL==1){
        level1Collision();
    } else if(LEVEL==2){
        level2Collision();
    } else if(LEVEL==3){
        level3Collision();
    }
    
    gameOver();
    
    if(ball.x < 0 || ball.x > cvs.width || ball.y < 0 || ball.y > cvs.height)
        resetBall();
    
    ball.dx *= 0.98;
    ball.dy *= 0.98;
    if(ball.dx < 0.01 && ball.dx > -0.01 && ball.dy > -0.01 && ball.dy < 0.01 && shots == 0){
       if(ball.x != cvs.width/2){
        resetBall();
        }
    }
}

// Game loop
function loop(){
    // clears canvas
    if(LEVEL==1){
        ctx.drawImage(BG_IMG_LEVEL1, 0, 0);
    }else if(LEVEL==2){
        ctx.drawImage(BG_IMG_LEVEL2, 0, 0);
    }else if(LEVEL==3){
        ctx.drawImage(BG_IMG_LEVEL3, 0, 0); 
    }
    draw();
    update();
    
    if(! GAME_OVER){
        requestAnimationFrame(loop);
    }
}
loop();

const gameover = document.getElementById("gameover");
const youwin = document.getElementById("youwin");
const restart = document.getElementById("restart");

// Click you won to play again
restart.addEventListener("click", function(){
    location.reload(); // reload the page
})

// Show winning message
function showYouWin(){
    gameover.style.display = "block";
    youwon.style.display = "block";
}