var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

 function forception (people, alphabet){
    for (var i = 0; i < people.length; i++){
        for (var j = 0; j < alphabet.length; j++){
            people[i] += alphabet[j]
            
        }
    }
 }
 forception (people, alphabet)
 
 console.log(people);