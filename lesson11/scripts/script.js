
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