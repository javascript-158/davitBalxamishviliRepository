window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.documentElement.scrollTop > 1450) {
        document.getElementById("ipsum1").className = "ipsum_demo";
        document.getElementById("ipsum2").className = "ipsum dolor";
    } else {
        document.getElementById("ipsum1").className = "Lorem";
        document.getElementById("ipsum2").className = "Lorem2";
    }

    if (document.documentElement.scrollTop > 3050) {
        document.getElementById("Creator").className = "Creator2";
        document.getElementById("CreatorDiv").className = "Creator_div";
        document.getElementById("CreatorP").className = "Creator_p";
        document.getElementById("CreatorP2").className = "Creator_p";
    } else {
        document.getElementById("Creator").className = "Creator";
        document.getElementById("CreatorDiv").className = "Creator_div Creator_div2";
        document.getElementById("CreatorP").className = "Creator_p Creator_p2";
        document.getElementById("CreatorP2").className = "Creator_p Creator_p2";
    }
}