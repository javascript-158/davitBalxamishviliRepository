let img = document.getElementById("img_001");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let RedButton = document.getElementById("Red_button");
let BlueButton = document.getElementById("Blue_button");
let GreenButton = document.getElementById("Green_button");
let body = document.querySelector("body");
let buttonSeeEndHide = document.getElementById("but_007");
let buttonSeeEndHide2 = document.getElementById("but_008");
let title = document.getElementById("h1_1");
let article = document.getElementById("lorem");
let article2 = document.getElementById("lorem2");



function minusImg() {
    img.style.width = "200px";
    img.style.height = "150px";
}

function plusImg() {
    img.style.width = "550px";
    img.style.height = "400px";
}

function RedBoody() {
    body.style.backgroundColor = "red";
}

function BlueBoody() {
    body.style.backgroundColor = "blue";
}

function GreenBoody() {
    body.style.backgroundColor = "green";
}

title.style.display = "none";
article.style.display = "none";
article2.style.display = "none";

buttonSeeEndHide2.style.display = "none";
function buttonSeeHide() {
    buttonSeeEndHide.style.display = "none";

    buttonSeeEndHide2.style.display = "block";

    title.style.display = "block";

    article.style.display = "block";

    article2.style.display = "block";
}

function buttonSeeHide2() {
    buttonSeeEndHide.style.display = "block";
    buttonSeeEndHide2.style.display = "none";

    title.style.display = "none";

    article.style.display = "none";

    article2.style.display = "none";
}