function drawText(){
    ctx.font = "50px Titan One";
    ctx.fillStyle = "white";
    ctx.fillText("1", 130, 268);
    ctx.fillText("2", 130+160, 268);
    ctx.fillText("3", 130+160*2, 268);
    
    ctx.fillText("4", 125, 268+140);
    ctx.fillText("5", 130+160, 268+140);
    ctx.fillText("6", 125+160*2, 268+140);
    
    ctx.fillText("7", 130, 268+140*2);
    ctx.fillText("8", 125+160, 268+140*2);
    ctx.fillText("9", 127+160*2, 268+140*2);
}

function drawSafes(){
    ctx.fillStyle = 'rgb(51, 51, 51)';
    ctx.fillRect(0, 0, cvs.width, cvs.height);    
    ctx.drawImage(bg_safe, 0,0);
    // clears canvas
    ctx.drawImage(support_safe,580,270);
    ctx.drawImage(safe,60,180);
    ctx.drawImage(safe,60+160,180);
    ctx.drawImage(safe,60+160*2,180);
    
    ctx.drawImage(safe,60,180+140);
    ctx.drawImage(safe,60+160,180+140);
    ctx.drawImage(safe,60+160*2,180+140);
    
    ctx.drawImage(safe,60,180+140*2);
    ctx.drawImage(safe,60+160,180+140*2);
    ctx.drawImage(safe,60+160*2,180+140*2);
    
    ctx.drawImage(safe_start, 580+20,270+45);
    drawText();
    
    headingText("CLICK THE DIAL TO SPIN!");
}

function openSafe(x){
    // draws over the safe with the new picture 
    ctx.font = "50px Titan One";
    var xPlus = x+1;
    headingText("Safe "+xPlus);
    switch(x) {
        case 0:
            ctx.drawImage(safeOpen, 20,155);
            ctx.fillText(multipliers[0], 100,270);
            break;
        case 1:
            ctx.drawImage(safeOpen, 20+160,155);
            ctx.fillText(multipliers[1], 100+160,270);
            break;
        case 2:
            ctx.drawImage(safeOpen, 20+160*2,155);
            ctx.fillText(multipliers[2], 100+160*2,270);
            break;
        case 3:
            ctx.drawImage(safeOpen, 20,155+140);
            ctx.fillText(multipliers[3], 100,270+140);
            break;
        case 4:
            ctx.drawImage(safeOpen, 20+160,155+140);
            ctx.fillText(multipliers[4], 100+160,270+140);
            break;
        case 5:
            ctx.drawImage(safeOpen, 20+160*2,155+140);
            ctx.fillText(multipliers[5], 100+160*2,270+140);
            break;
        case 6:
            ctx.drawImage(safeOpen, 20,155+140*2);
            ctx.fillText(multipliers[6], 100,270+140*2);
            break;
        case 7:
            ctx.drawImage(safeOpen, 20+160,155+140*2);
            ctx.fillText(multipliers[7], 100+160,270+140*2);
            break;
        case 8:
            ctx.drawImage(safeOpen, 20+160*2,155+140*2);
            ctx.fillText(multipliers[8], 100+160*2,270+140*2);
            break;
        default:
    }
}
