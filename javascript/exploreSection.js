var leftArrowExplore = document.getElementById("leftExploreSectionButton");
var rightArrowExplore = document.getElementById("rightExploreSectionButton");
var figuresContainer = document.getElementById("figuresContainer");
var moveExploreAmount = 0;
    
leftArrowExplore.addEventListener("click", moveExploreSectionLeft);
rightArrowExplore.addEventListener("click", moveExploreSectionRight);

function moveExploreSectionLeft() {
    moveExploreAmount += 100;
    figuresContainer.style.transform = "translateX(" + moveExploreAmount + "px)";
    
}
function moveExploreSectionRight() {
    moveExploreAmount -= 100;
    figuresContainer.style.transform = "translateX(" + moveExploreAmount + "px)";
}