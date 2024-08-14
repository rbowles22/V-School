var doubleClick = document.getElementById("magic-button")
doubleClick.addEventListener("dblclick", function(){
    doubleClick.style.backgroundColor = "green"
});

doubleClick.addEventListener("mouseover", function(){
    doubleClick.style.backgroundColor = "blue"
});
doubleClick.addEventListener("mousedown", function(){
    doubleClick.style.backgroundColor = "red"
});
doubleClick.addEventListener("mouseup",function(){
    doubleClick.style.backgroundColor = "yellow"
});
doubleClick.addEventListener("wheel", function(){
    doubleClick.style.backgroundColor = "orange"
});