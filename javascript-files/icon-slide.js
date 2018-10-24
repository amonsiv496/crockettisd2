var number = 0;
function exploreSlider(arrow){
    for (var i = 0; i < 10; i++){
        if (arrow == 'leftArr'){
            number = number + 10;
            var exploreContainer = document.getElementById("explore-slider-container");
            exploreContainer.style.transform = "translateX(" + number + "px)";
            exploreContainer.style.transition = "1s";
        }
        else {
            number = number - 10;
            var exploreContainer = document.getElementById("explore-slider-container");
            exploreContainer.style.transform = "translateX(" + number + "px)";
            exploreContainer.style.transition = "1s";
        }
    }
}

/*------------------------------------------------------------------------------------*/

function iconCaptionBlack0() {
    document.getElementsByClassName("icon-caption")[0].style.color = "#000";
}
function iconCaptionWhite0(){
    document.getElementsByClassName("icon-caption")[0].style.color = "#FFF";
}
function iconCaptionBlack1() {
    document.getElementsByClassName("icon-caption")[1].style.color = "#000";
}
function iconCaptionWhite1(){
    document.getElementsByClassName("icon-caption")[1].style.color = "#FFF";
}
function iconCaptionBlack2() {
    document.getElementsByClassName("icon-caption")[2].style.color = "#000";
}
function iconCaptionWhite2(){
    document.getElementsByClassName("icon-caption")[2].style.color = "#FFF";
}
function iconCaptionBlack3() {
    document.getElementsByClassName("icon-caption")[3].style.color = "#000";
}
function iconCaptionWhite3(){
    document.getElementsByClassName("icon-caption")[3].style.color = "#FFF";
}
function iconCaptionBlack4() {
    document.getElementsByClassName("icon-caption")[4].style.color = "#000";
}
function iconCaptionWhite4(){
    document.getElementsByClassName("icon-caption")[4].style.color = "#FFF";
}
function iconCaptionBlack5() {
    document.getElementsByClassName("icon-caption")[5].style.color = "#000";
}
function iconCaptionWhite5(){
    document.getElementsByClassName("icon-caption")[5].style.color = "#FFF";
}
function iconCaptionBlack6() {
    document.getElementsByClassName("icon-caption")[6].style.color = "#000";
}
function iconCaptionWhite6(){
    document.getElementsByClassName("icon-caption")[6].style.color = "#FFF";
}
function iconCaptionBlack7() {
    document.getElementsByClassName("icon-caption")[7].style.color = "#000";
}
function iconCaptionWhite7(){
    document.getElementsByClassName("icon-caption")[7].style.color = "#FFF";
}
function iconCaptionBlack8() {
    document.getElementsByClassName("icon-caption")[8].style.color = "#000";
}
function iconCaptionWhite8(){
    document.getElementsByClassName("icon-caption")[8].style.color = "#FFF";
}
function iconCaptionBlack9() {
    document.getElementsByClassName("icon-caption")[9].style.color = "#000";
}
function iconCaptionWhite9(){
    document.getElementsByClassName("icon-caption")[9].style.color = "#FFF";
}
