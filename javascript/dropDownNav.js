var navTabShown = false;
function showNavTabs() {
    var navTabs = document.getElementById("droppedNav");
    
    
    var imageWidth = parseInt(window.getComputedStyle(document.getElementById("crockettISDLogo")).width);
    
    if (navTabShown == false) {
        if (imageWidth < 125) {
            navTabs.style.height = "305px";
        }
        else {
            navTabs.style.height = "430px";
        }
        navTabShown = true;
    }
    else {
        navTabs.style.height = "0px";
        navTabShown = false;
    }
}