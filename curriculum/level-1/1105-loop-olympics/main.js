const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (var i = 0; i < myNumbers.length; i++){
    console.log(myNumbers[i]);
}

for (var j = myNumbers.length - 1; j >= 0; j--){
    console.log(myNumbers[j]);
}

const fruit = ["banana", "orange", "apple", "kiwi"]

for (var k = 0; k < fruit.length; k++){
    console.log(fruit[k]);
}

for (var l = 0; l < myNumbers.length; l++){
    console.log(myNumbers);
}

for (var m = 0; m <= 100; m++){
    if (m % 2 ===0){
        console.log(m);
    }
}

for (var n = 0; n < fruit.length; n += 2){
    console.log(fruit[n]);
}

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  
  for (var o = 0; o < peopleWhoWantToSeeMadMaxFuryRoad.length; o++){
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[o].name);
  }
