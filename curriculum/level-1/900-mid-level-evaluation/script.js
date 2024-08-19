//Setting function parameters to elementId and newText
function changeTextContent(elementId, newText){
    //Getting elementId using the elementId variable and setting the text content to the newText variable.
    document.getElementById(elementId).textContent = newText


}
//Able to change the text using the parameters
/* changeTextContent("heading", "Hi how are ya")

changeTextContent("paragraph", "Make yourself a dang quesadilla Napoleon") */

//Creating button variable
const button = document.getElementById("changeButton")

//Adding event listener to change the text when button is clicked.
button.addEventListener("click", function (event){
    changeTextContent("heading", "Tina come get some dinner")
    changeTextContent("paragraph", "Tina eat the food!")
})