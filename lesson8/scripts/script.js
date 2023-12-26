

function loadFile() {
    return new Promise((resolve, reject) => {
        const fileInput = document.getElementById('fileInput');
        console.log(fileInput.files[0])
        const file = fileInput.files[0];

        if (file) {
            const read = new FileReader();

            read.readAsText(file);

            read.onload = function (e) {
                document.getElementById('fileArea').value = e.target.result;

                let shouwText = document.getElementById('fileArea').value;
                // let arrayShouwText2 = [shouwText]

                let deletEnter = shouwText.filter(value => value  !== ' ');
                console.log(deletEnter);

                for (let count = 0; count <= deletEnter.length; count++) {
                    let TotalSymbols = "Total symbols: ";

                    let arrayShouwText = [TotalSymbols, count];


                    document.getElementById('h3_001').innerHTML = arrayShouwText.join(" ");
                };
            }
        }
    })
}
// let arrayShouwText2 = ['shoow', 'go', 'lol']


// let deletEnter = arrayShouwText2.filter(value => value !== 'shoow');
// console.log(deletEnter)

function shouwfile() {
    let shouwText = document.getElementById('fileArea').value;

    for (let count = 0; count <= shouwText.length; count++) {
        let TotalSymbols = "Total symbols: ";

        let arrayShouwText = [TotalSymbols, count];

        document.getElementById('h3_001').innerHTML = arrayShouwText.join(" ");


    };
}

// let arrayOfStudents = ["soso", "davit", "sopo", "irakli", "nia"];

// let arrayOfStudents = [file];

// for (let count = 0; count < arrayOfStudents.length; count++) {
//     document.getElementById('h3_001').innerHTML = count;
// };

function loadFile2() {
    return new Promise((resolve, reject) => {
        const fileInputImg = document.getElementById('fileInputImg');
        console.log(fileInputImg.files[0])
        const fileImg = fileInputImg.files[0];

        if (fileImg) {
            const join = new FileReader();

            join.readAsArrayBuffer(fileImg);

            join.onload = function (e) {
                document.getElementById('fileImg').value = e.target.result;
                let x = document.createElement("IMG");
                x.setAttribute("src", e.target.result);
                x.setAttribute("width", "304");
                x.setAttribute("height", "228");
                x.setAttribute("alt", "The Pulpit Rock");
                document.body.appendChild(x);
            }
        }
    })
}

