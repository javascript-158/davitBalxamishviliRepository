

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
            }
        }

        let moreThanFive = file.filter((number) => number);

        document.getElementById("h6_001") = moreThanFive;
    })
}

