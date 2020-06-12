var clickable = true;
var betAmount; // £10 bet
var headString;
var gameover = false;

cvs.addEventListener('mousedown', function(e){
console.log(clickable);
    // Get canvas position on page
    var canvasBounds = cvs.getBoundingClientRect();
    // Turn click coordinates into canvas coordinates 1
    var localX = e.pageX - canvasBounds.left;
    var localY = e.pageY - canvasBounds.top;
    // Test rectangle
    if(clickable==true){
        if (rectangle.isHitBy(localX, localY)){
            clickable = false;
            genNumber();
        }
    }    
});

cvs.addEventListener('mousedown', function(e){
    if(gameover===true){
        window.location.reload(true);
    }
});

function main(){
    genMultipliers();
    drawSafes();
    drawBackground();
    betAmount = 10;
}

function gameEnd(){
    console.log("gameover"+gameover);
    gameover = true;
}

function win(){
    setTimeout(gameEnd, 5000);
    angle=angle+1000000;
    headingText("YOU WIN £"+betAmount*getWinningInt());
    setTimeout(rotateAntiCL, 1000);
}
main();