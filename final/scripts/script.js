function LoginButton() {
    backgroundLogin.style.display = "flex";
}
let backgroundLogin = document.getElementById("backgroundLogin");

window.onclick = function (event) {
    if (event.target == backgroundLogin) {
        backgroundLogin.style.display = "none";
    }
}

function xmark() {
    backgroundLogin.style.display = "none";
}

function handleRegistration() {
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let oldUsersData = localStorage.getItem('usersData');
    oldUsersData = JSON.parse(oldUsersData);
    console.log(oldUsersData)

    let user = {
        email: email,
        username: username,
        password: password
    }

    if (oldUsersData === null) {
        localStorage.setItem('usersData', JSON.stringify([user]));
        console.log("hello world1");
    } else {
        for ( user of oldUsersData) {
            if (user.username === username) {
                let errorMessage = document.getElementById("error");
                errorMessage.style.color = "red";
                console.log("gudbai world");
                errorMessage.innerHTML = "This username is already used!"
            } else {
                oldUsersData.push(user);
                localStorage.setItem('usersData', JSON.stringify(oldUsersData));
                console.log("hello world2");
            }
        }
    }
}






// let usersData = [
//     {
//         email: "email",
//         username: "username",
//         password: "passwords"
//     },
// ]

// localStorage.setItem("usersData", JSON.stringify(usersData))