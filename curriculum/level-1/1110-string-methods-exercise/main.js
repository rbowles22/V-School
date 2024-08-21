var word = "Hello World";
var upperLower = word.toUpperCase() + word.toLowerCase();
console.log(upperLower);

var wordLength = Math.floor(word.length / 2);
console.log(wordLength);

var sliceWord = word.slice(0, 6);
console.log(sliceWord);
//Didn't understand question

var slice2 = word.slice(6);
console.log(slice2);

var weirdWord = sliceWord.toUpperCase() + slice2.toLowerCase();
console.log(weirdWord);

