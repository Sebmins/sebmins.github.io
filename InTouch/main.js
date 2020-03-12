var clickable = true;
var betAmount; // £10 bet
var headString = "You bet £";

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

function main(){
    genMultipliers();
    drawSafes();
    drawBackground();
    betAmount = 10;
}

function win(){
    angle=angle+1000000;
    headingText("YOU WIN £"+betAmount*getWinningInt());
    setTimeout(rotateAntiCL, 1000);
}

main();