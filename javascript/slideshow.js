var slides = document.getElementsByClassName("slides");
var captions = document.getElementsByClassName("slideshowCaptions");
var leftButton = document.getElementById("leftButton");
var rightButton = document.getElementById("rightButton");
var slideIndex = 0;

leftButton.addEventListener("click", prevSlide, true);
rightButton.addEventListener("click", nextSlide, true);

function prevSlide() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        captions[i].style.display = "mone";
    }
    
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides[slideIndex].style.display = "block";
    captions[slideIndex].style.display = "block";
}

function nextSlide() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        captions[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";
    captions[slideIndex].style.display = "block";
}