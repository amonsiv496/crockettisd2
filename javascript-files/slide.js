var slides = document.getElementsByClassName("slide");
var captions = document.getElementsByClassName("caption");
var slide = 0;
var caption = 0;

function changeSlide(buttonClicked){
    for (var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        captions[i].style.display = "none";
    }
    if (buttonClicked == 'btnRight'){
        slide++;
        caption++;
        if (slide > slides.length - 1){
            slide = slides.length - 1;
            caption = captions.length - 1;
        }
    }
    if (buttonClicked == 'btnLeft') {
        slide--;
        caption--;
        if (slide < 0) {
            slide = 0;
            caption = 0;
        }
    }
    slides[slide].style.display = "block";
    captions[caption].style.display= "block";
}
