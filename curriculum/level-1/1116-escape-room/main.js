const readline = require("readline-sync");
const player = {
    name: readline.question("What is your name?"),
    hasKey: false,
}

console.log("Welcome to the Escape Room " + player.name + "!");

const choices = ['left', 'right', 'straight'];

const newChoices = ['right', 'straight'];

const thirdChoices = ['left', 'right']

console.log("You are currently trapped inside of a room. You notice there is a door right in front of you, a wall to your right with a hole in it, and to your left is a candle-lit shrine dedicated to Tina the llama from Napoleon Dynamite. You must find the key to open the door. Where will you go?");

const index = readline.keyInSelect(choices, "Choose wisely.");

console.log(chooseDirection(index));

//Functions for each direction
function chooseLeft(){
    
    player.hasKey = true
    console.log("Congratulations! You have found the key but accidentally summoned Rex Kwon Do! Open the door before you take a roundhouse kick to the face!")
}

function chooseRight(){
    player.hasKey = false
    console.log("You reached in the hole and got bitten by the Texas Rattlesnake Stone Cold Steve Austin himself. You have died.")
}
//Function if you choose to go straight. Will not let you escape unless you have a key.
function chooseStraight(){
    if(player.hasKey === true){
        console.log("Congratulations! You've escaped the room!")
    }else if(player.hasKey === false){
        console.log("You need a key to escape big dog...")
        let thirdIndex = readline.keyInSelect(thirdChoices, "Find the key pls.")
        if(thirdIndex === 0){
            chooseLeft()
            let finalIndex = readline.keyInSelect(newChoices, "Sign up for my 8 week program!")
            if(finalIndex === 0){
                chooseRight()
             }else if(finalIndex === 1){
                console.log("You've escaped the almighty Rex Kwon Do! Bow to your sensei!!!")
             }
        }else if(thirdIndex === 1){
            chooseRight()
        }
    }
}

//Master function that runs when any option is chosen.
function chooseDirection(index){
    if(index === 0){
        chooseLeft()
        let newIndex = readline.keyInSelect(newChoices, "You should probably leave now...")
        if(newIndex === 1){
            console.log("You've escaped the almighty Rex Kwon Do! Bow to your sensei!!!")
        }else if(index === 0){
            chooseRight()
        }
}else if(index === 1){
    chooseRight()
}else if(index === 2){
    chooseStraight()
}
}


