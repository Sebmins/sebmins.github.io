var multipliers = ["X15","X16","X17","X18","X19","X20"];
var check = [];
var multi = [];
// Generates the multipliers
function genMultipliers (){
    // Get 3 random mulitpliers
    while(multipliers.length>3)
        multipliers.splice(Math.floor(Math.random()*multipliers.length), 1);
    
    // Tripple the multipliers to fill all 9 safes
    for(var i = 0; i <3; i++){
        multipliers.push(multipliers[i],multipliers[i]);
    }
    
    // Shuffle multipliers into random safes
    shuffle(multipliers);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getMultis(x){
    return multipliers[x];
}

// Used to return true if winning condition is met
function checkMultipliers(){
    for(var x = 0; x<check.length;x++){
        for(var y = 0; y<check.length;y++)
        {
            if((check[x]===check[y])&&(x!==y)) {
                return true;
            }
        }
    }
    return false;
}

// Converts multiplier string to int
function getWinningInt(){
    for(var x = 0; x<check.length;x++){
        for(var y = 0; y<check.length;y++)
        {
            if((check[x]===check[y])&&(x!==y)) {
                var che = check[x].substring(1);
                return che;
            }
        }
    }
    return false;
}