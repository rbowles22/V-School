var form = document.airlineForm;
var button = document.getElementById("submit");
//var query = document.querySelector;

//Everything is working when clicking but not submitting...

button.addEventListener("click", function(event){
    event.preventDefault()
    const firstName = form.firstName.value;
    form.firstName.value = "";
    const lastName = form.lastName.value;
    form.lastName.value = "";
    const age = form.age.value;
    form.age.value = "";

    const gender = form.gender.value;

    const destination = form.travelLocation.value;
    const diet = form.diet;

    const newInputs = [];

        
    for(let i = 0; i < diet.length; i++){
        if(form.diet[i].checked){
            newInputs.push(form.diet[i].value)
        }
    }

        alert("First Name: " + firstName + " Last Name: " + lastName + " Age: " + age + " Gender: " + gender + " Travel Location: " + destination + " Diet: " + newInputs + " Awesome, now if you die, it won't be an accident..");
})


