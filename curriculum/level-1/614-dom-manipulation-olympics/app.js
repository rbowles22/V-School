var headerOne = document.getElementById("header");
headerOne.textContent = "JavaScript Made This!!"
headerOne.style.fontWeight = "bold";
headerOne.style.textAlign = "center";

var container = document.createElement("div");
headerOne.append(container);

var headerTwo = document.createElement("span");
headerTwo.textContent = "Ryland Bowles";
headerTwo.textAlign = "center";
headerTwo.style.color = "peachPuff";
container.append(headerTwo);

var headerThree = document.createElement("span");
headerThree.textContent = " wrote the JavaScript";
headerThree.style.color = "black";
headerThree.textAlign = "center";
container.append(headerThree);

var newLeft = document.querySelectorAll(".message-left");
for (var i = 0; i < newLeft.length; i++){
    newLeft[0].textContent = "Can you bring me my chapstick?";
    newLeft[1].textContent = "But my lips hurt real bad!";
}

var newRight = document.querySelectorAll(".message-right");
for (var i = 0; i < newRight.length; i++){
    newRight[0].textContent = "No Napoleon.";
    newRight[1].textContent = "Just borrow some from the school nurse.";
}

var clear = document.getElementById("clear-button")

function newButton(){
    for (var i = 0; i < newLeft.length; i++){
        newLeft[i].textContent = "";
    }
    for (var i = 0; i < newRight.length; i++){
        newRight[i].textContent = "";
    }
}

document.getElementById("clear-button").addEventListener("click", newButton);


function newTheme (){
    var dropDown = document.getElementById("theme-drop-down");
    dropDown.value = "theme-two";
    newLeft[i].style.backgroundColor = "red";
    newRight[i].style.backgroundColor = "black";
}
