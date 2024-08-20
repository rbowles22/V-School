var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
//console.log(vegetables);

fruit.shift();
//console.log(fruit);

//console.log(fruit.indexOf("orange"));

fruit.push(1);
//console.log(fruit);

//console.log(vegetables.length);

vegetables.push(3);
//console.log(vegetables);

const food = fruit.concat(vegetables);
//console.log(food);

food.splice(4, 2);
//console.log(food);

var doof = food.reverse()
//console.log(doof);

doof.join("");
console.log(doof);

//Node will not let me split, says it is not a function, that is why 9 and 10 are not 100% correct.
