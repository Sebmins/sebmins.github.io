var i = 0;
var j = 0;
var dial = 2;
var angle = 0;
var ran= 0;

function genNumber(){
    headingText("SPINNING!");
    // Get random number from 1 - 9
    ran = getRandom2();
    console.log(ran);
    // Find the degrees needed to rotate to the dial number
    var dif = getDifference(ran);
}

function getDifference(newDial){
    // Old dial - new dial gives amount needed to rotate
    var dif = dial - newDial;
    dial = newDial;
    
    // If rotation amount if greater than 4 it's quicker to rotate the other way
    if(dif<-4){
        dif=dif+9;
    }
    // 393 is the degrees needed to rotate for 1 
    angle=angle+393*dif;
    
    if(dif>0){
        rotateAntiCL();
    }else{
        rotateCL();
    }
    return dif;
}

function drawAfterSpin(){
    // Enter code on screen
    code[j] = [ran];
    drawBackground();

    j++;
    // Open safe with generated number
    openSafe(ran-1);

    // Check to see if multipliers are the same*/
    check[j] = getMultis(ran-1);
    if(checkMultipliers()===true){
        win();
    }else {
        clickable = true;   
    }
}

function rotateCL() {
    // Rotates the dial clockwise
    ctx.save();
    ctx.translate(147+580, 183+260);
    ctx.rotate(i / 180 / Math.PI);
    ctx.drawImage(safe_start, -safe_start.width/2,-safe_start.height/2);
    ctx.restore();
    if(angle<i){
        i-=30;
        requestAnimationFrame(rotateCL);
    }
    else{
        drawAfterSpin();
    }
}

function rotateAntiCL() {
    //rotates the dial anti clockwise
    ctx.save();
    ctx.translate(147+580, 183+260);
    ctx.rotate(i / 180 / Math.PI);
    ctx.drawImage(safe_start, -safe_start.width/2,-safe_start.height/2);
    ctx.restore();
    if(angle>i){
        i+=30;
        requestAnimationFrame(rotateAntiCL);
    }else{
        drawAfterSpin();
    }
}

let combination = [1,2,3,4,5,6,7,8,9];

function getRandom2(){
    // Random place in array
    let rand = Math.floor((Math.random() * combination.length));
    // Get number from array
    rand = combination[rand];
    
    // Remove number so it can't be chosen again
    for( var i = 0; i < combination.length; i++){
        if ( combination[i] === rand) 
        { 
            combination.splice(i, 1); 
        }
    }
    return rand;
}