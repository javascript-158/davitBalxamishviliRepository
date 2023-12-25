// let indexOfSlide = 0;

// function moveSlides(number) {
//     slidesShower(indexOfSlide += number)
// }

// function currentSlide(number) {
//     slidesShower(indexOfSlide = number);
// }
// function slidesShower(number) {
//     let i;
//     let slides = document.getElementsByClassName("myPictures");
//     let dots = document.getElementsByClassName("dot");

//     indexOfSlide = indexOfSlide + 1

//     if (indexOfSlide > slides.length) {
//         indexOfSlide = 1;
//     };

//     if (number > slides.length) {
//         indexOfSlide = 1;
//     }

//     if (number < 1) {
//         indexOfSlide = slides.length;
//     }

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "")
//     }

//     slides[indexOfSlide - 1].style.display = "block";
//     dots[indexOfSlide - 1].className += " active"
//     setTimeout(slidesShower, 2000);
// }
// slidesShower(1);

let slideIndex = 0;
autoSlider();
function autoSlider() {
    let i;
    let slides = document.getElementsByClassName("myPictures");
    let dots = document.getElementsByClassName("dot");


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex = slideIndex + 1;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    };

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    setTimeout(autoSlider, 2000); // ფუნქციის რეკურსიული გამოძახება
}

let indexOfSlide = 1;

function moveSlides(number) {
    slidesShower( indexOfSlide += number)
}

function currentSlide(number) {
    slidesShower(indexOfSlide = number);
}

function slidesShower(number) {
    let i2;
    let slides2 = document.getElementsByClassName("myPictures2");
    let dots2 = document.getElementsByClassName("dot2");

    if (number > slides2.length) {
        indexOfSlide = 1;
    }

    if (number < 1) {
        indexOfSlide = slides2.length;
    }

    for (i2 = 0; i2 < slides2.length; i2++) {
        slides2[i2].style.display = "none";
    }

    for (i2 = 0; i2 < dots2.length; i2++) {
        dots2[i2].className = dots2[i2].className.replace(" active2", "")
    }

    slides2[indexOfSlide-1].style.display = "block";
    dots2[indexOfSlide-1].className += " active2";
}

slidesShower(1);

function searchContact() {
    let input, filter, serchDiv, h2, i, txtValue;

    input = document.getElementById("userInput");
    filter = input.value.toUpperCase();
    serchDiv = document.getElementsByClassName("serch_div");

    for (i of serchDiv) {
        h2 = i.querySelector("h2");
        txtValue = h2.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            i.style.display = "flex";
        } else {
            i.style.display = "none";
        }
    }
}