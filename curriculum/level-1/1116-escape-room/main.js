const readline = require("readline-sync");
const player = {
    name: readline.question("What is your name?"),
    hasKey: false,
    isDead: false
}

console.log("Welcome to the Escape Room " + player.name + "!");

const choices = ['left', 'right', 'straight'];

const newChoices = ['right', 'straight'];


console.log("You are currently trapped inside of a room. You notice there is a door right in front of you, a wall to your right with a hole in it, and to your left is a candle-lit shrine dedicated to Tina the llama from Napoleon Dynamite. You must find the key to open the door. Where will you go?");

const index = readline.keyInSelect(choices, "Choose wisely.");

console.log(chooseDirection(index));

//Functions for each direction
function chooseLeft(){
    
    player.hasKey = true
}

function chooseRight(){
    player.hasKey = false
    player.isDead = true
}
//There's an issue with this function
function chooseStraight(){
    if(player.hasKey = true){
        console.log("Congratulations! You've escaped the room!")
    }else if(player.hasKey = false){
        console.log("You need a key to escape big dog...")
        readline.keyInSelect(choices, "Choose wisely.")
    }
}

//Master function that runs when any option is chosen.
function chooseDirection(index){
    if(index === 0){
        chooseLeft()
        console.log("Congratulations! You have found the key but accidentally summoned Rex Kwon Do! Open the door before you take a roundhouse kick to the face!")
        let newIndex = readline.keyInSelect(newChoices, "You should probably leave now...")
        if(newIndex === 1){
            console.log("You've escaped the almighty Rex Kwon Do! Bow to your sensei!!!")
        }else if(index === 2){
            chooseRight()
        }
}else if(index === 1){
    chooseRight()
    console.log("You reached in the hole and got bitten by the Texas Rattlesnake Stone Cold Steve Austin himself. You have died.")
}else if(index === 2){
    chooseStraight()
}
}


