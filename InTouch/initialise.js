const cvs = document.getElementById("Buca");
const ctx = cvs.getContext("2d");

// Adds border to canvas
cvs.style.border = "10px solid #000";
ctx.lineWidth = 1;

const Dimbo = 'Dimbo';
//document.fonts.load('10pt "Dimbo"').then(renderText);

const support_safe = new Image();
support_safe.src = "graphics/support_safe_dial_minigame.png";
const text_spin = new Image();
text_spin.src = "graphics/text_spin_safe_dial_minigame.png";
const safe_start = new Image();
safe_start.src = "graphics/safe_dial_minigame_start.png";
const bg_safe = new Image();
bg_safe.src = "graphics/background_safe_minigame.png";
const safe = new Image();
safe.src = "graphics/safe_minigame.png";
const safeOpen = new Image();
safeOpen.src = "graphics/safe_open_minigame.png";
const bg_code = new Image();
bg_code.src = "graphics/screen_safe_minigame.png";
const heading = new Image();
heading.src = "graphics/heading.png";

function headingText(string){
    ctx.drawImage(heading, 40,25,800,99);
    ctx.font = `80px "${Dimbo}"`;
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(string,450,100);
    ctx.fillStyle = "white";
    ctx.textAlign = "start";
    ctx.font = "50px Titan One";
}

var code = ["-","-","-","-"];
function drawBackground(){    
    
    ctx.drawImage(bg_code,575,170);
    ctx.font = "80px Titan One";
    
    ctx.fillText(code[0],620,240);
    ctx.fillText(code[1],620+60,240);
    ctx.fillText(code[2],620+60*2,240);
    ctx.fillText(code[3],620+60*3,240);
    
    ctx.drawImage(text_spin, 580+110,270+135);
    
    ctx.rotate(safe_start);
}