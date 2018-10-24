
var clicked = false;
function droppedDownMenu(){
    if (clicked == false) {
        clicked = true;
        document.getElementById("dropdown-menu-container").style.height = "405px";
    }
    else {
        document.getElementById("dropdown-menu-container").style.height = "0px";
        clicked = false;
    }
}

function barsAnimation(x) {
    x.classList.toggle("change");
}
