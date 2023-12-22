let usersData = [
    {
        firstname: "tato",
        lastName: "ipsumishvili",
        location: "dfsd",
        username: "tv7574",
        password: "akvk"
    },
    {
        firstname: "jojo",
        lastName: "atavia",
        location: "fgfgngfdc",
        username: "ckjdjkd",
        password: "@@@@@@@@@@@@@"
    }
]

localStorage.setItem("usersData", JSON.stringify(usersData))

let dataFromDb = localStorage.getItem("usersData");
dataFromDb = JSON.parse(dataFromDb);
console.log(dataFromDb);

function createAccaunt() {
    dataFromDb.push(
        {
            firstname: document.getElementById("firstname").value,
            lastName: document.getElementById("lastName").value,
            location: document.getElementById("location").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        }
    )
    
    localStorage.setItem("usersData", JSON.stringify(dataFromDb))
}

