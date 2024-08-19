const form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()

    const input = form.title.value 
    form.title.value = ""

    //This is the list we need to access
    const ul = document.getElementById("list")

   //Creating list item and appending it to ul, and appending everything else to this li.
    const item = document.createElement("li")
    //Appending the item to the list
    ul.appendChild(item)


    const groceryItem = document.createElement("div")

    groceryItem.textContent = input
    //Appending this to the list
    item.appendChild(groceryItem)

    //Creating edit button
    const edit = document.createElement("button")
    edit.textContent = "Edit"

    //Appending it to groceryItem
    item.appendChild(edit)

    //Creating delete button.
    const rButton = document.createElement("button")
    rButton.textContent = "X"
    item.appendChild(rButton)

    //Right here is how we delete the input by clicking the X button WOOOOOOO!!!
    rButton.addEventListener("click", function(event){
        document.getElementById("list").removeChild(item)
     })

edit.addEventListener("click", function(event){
    console.log("Edit button was pressed")

    const editInput = document.createElement("input")
    editInput.value = groceryItem.textContent
    groceryItem.append(editInput)

    const saveButton = document.createElement("button")
    groceryItem.append(saveButton)
    saveButton.textContent = "save"

    saveButton.addEventListener("click", function(event){
        console.log("The text was edited")
        groceryItem.textContent = editInput.value
    })
})




})


