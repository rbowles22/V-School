const colors = ["red", "blue", "green"]

const form = document.myForm

form.addEventListener("submit", function(event){
    event.preventDefault()

    const grocery = form.grocery.value
    form.grocery.value = ""

    const div = document.createElement("div")
    div.textContent = grocery
    document.getElementsByTagName("b")[0].append(h1)
})


/*function createDropDown(event){
    const dropDown = document.createElement("select")
    form.append(dropDown)
    for (let i = 0; i < colors.length; i++){
        const option = createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("select", createDropDown(event))

}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}*/
