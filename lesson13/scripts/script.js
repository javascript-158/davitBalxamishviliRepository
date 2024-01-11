function buttonLogin() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let Username = document.getElementById("Username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let oldUsersData = localStorage.getItem('usersData');
    oldUsersData = JSON.parse(oldUsersData);

    let usersDataV2 = {
        firstName: firstName,
        lastName: lastName,
        Username: Username,
        email: email,
        password: password
    }

    if (oldUsersData === null) {
        localStorage.setItem('usersData', JSON.stringify([usersDataV2]))
    } else {
        if (usersDataV2.password === "") {
            document.getElementById("error").innerHTML = "This user already exists"
        } else {
            oldUsersData.push(usersDataV2);
            localStorage.setItem('usersData', JSON.stringify(oldUsersData));
            window.location.href = "./signup.html"
            console.log("hello world")
        }
    }
}

function sddsfsdfsdf() {
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
    localStorage.setItem("usersData", JSON.stringify(usersData));
}