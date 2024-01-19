function signupButton() {
    backgroundLogin.style.display = "flex";
    backgroundLogin2.style.display = "none";
}
let backgroundLogin = document.getElementById("backgroundLogin");

window.onclick = function (event) {
    if (event.target == backgroundLogin) {
        backgroundLogin.style.display = "none";
    } else if ((event.target == backgroundLogin2)) {
        backgroundLogin2.style.display = "none";
    }
}

function xmark() {
    backgroundLogin.style.display = "none";
}

function handleRegistration() {
    let email = document.getElementById('email').value;
    let emailStyle = document.getElementById('email');
    let username = document.getElementById('username').value;
    let usernameStyle = document.getElementById('username');
    let password = document.getElementById('password').value;
    let passwordStyle = document.getElementById('password');

    let oldUsersData = localStorage.getItem('usersData');
    oldUsersData = JSON.parse(oldUsersData);
    console.log(oldUsersData)

    let user = {
        email: email,
        username: username,
        password: password
    }

    let filter = /^[ ]{1,}$/gm;
    let filter0 = /^[a-z\d._-]{1,}(@[a-z]{3,}.com)$/gm;

    if (filter0.test(email) === false) {

        document.getElementById('labelEmail').style.display = "block"
        emailStyle.className = "inputError";

    } else if (filter0.test(email) === true) {

        document.getElementById('labelEmail').style.display = "none"
        emailStyle.className = "sign_up_input";

    }
    if (filter.test(username) === true || username === "") {

        document.getElementById('labelUsername').style.display = "block"
        usernameStyle.className = "inputError";

    } else {

        document.getElementById('labelUsername').style.display = "none"
        usernameStyle.className = "sign_up_input";

    }
    if (filter.test(password) === true || password === "") {

        document.getElementById('labelPassword').style.display = "block"
        passwordStyle.className = "inputError";

    } else {

        document.getElementById('labelPassword').style.display = "none"
        passwordStyle.className = "sign_up_input";

    }
    if (filter0.test(email) === false || filter.test(username) === true || filter.test(password) === true || username === "" || password === "") {
        let errorMessage = document.getElementById("error");
        errorMessage.style.color = "red";
        errorMessage.innerHTML = "This username is already used!A"
    } else {
        if (oldUsersData === password) {
            let errorMessage = document.getElementById("error");
            errorMessage.style.color = "red";
            errorMessage.innerHTML = "This username is already used!"
        } else {
            oldUsersData.push(user);
            localStorage.setItem('usersData', JSON.stringify(oldUsersData));
            backgroundLogin.style.display = "none";
            backgroundLogin2.style.display = "flex";
        }
    }
}

// let usersData = [
//     {
//         email: "ggg0@gmail.com",
//         username: "username",
//         password: "passwords"
//     }
// ]

// localStorage.setItem("usersData", JSON.stringify(usersData))

function LoginButton() {
    backgroundLogin.style.display = "none";
    backgroundLogin2.style.display = "flex";
}
let backgroundLogin2 = document.getElementById("backgroundLogin2");

function xmark2() {
    backgroundLogin2.style.display = "none";
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function handleRegistration2() {
    let username = document.getElementById('username2').value;
    let password = document.getElementById('password2').value;
    let savePasswordIsChecked = document.getElementById('savePassword').checked;

    let usersData = localStorage.getItem('usersData');
    usersData = JSON.parse(usersData);

    let userExists = false;

    let loginForm = document.getElementById('loginWindowForm')

    let timeNow = new Date();

    timeNow.setTime(timeNow.getTime() + (5 * 24 * 60 * 60 * 1000));

    let expires = "expires=" + timeNow.toUTCString();
    let sessionToken = generateString(36);
    console.log(expires);
    //${expires};
    for (let user = 0; user < usersData.length; user++) {
        if (usersData[user].username === username && usersData[user].password === password) {
            if (savePasswordIsChecked === true) {
                document.cookie = `sessionToken=${sessionToken}; ${expires}; path=/`;
            } else {
                sessionStorage.setItem('sessionToken', sessionToken);
            }

            usersData[user].sessionToken = sessionToken;
            userExists = true;
        }
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    if (userExists === false) {
        // window.location.href = 'loginFailed.html';
    } else {
        window.location.href = 'profile.html';
    }

    localStorage.setItem('usersData', JSON.stringify(usersData));
}

let sessionToken = sessionStorage.getItem('sessionToken');
let usersData = localStorage.getItem('usersData');
usersData = JSON.parse(usersData);
console.log(sessionToken)
let usernameProfile = document.getElementById('usernameProfile')

let loggedInUserData = {};

let documentCookie = document.cookie;

if (documentCookie.length > 0) {
    let indexOfEqualSign = documentCookie.indexOf('=');
    sessionToken = documentCookie.slice(indexOfEqualSign + 1);
}

// let resultText = document.getElementById("result");

if (sessionToken) {
    // resultText.innerHTML = "Login Success";

    for (let user of usersData) {
        console.log(user.sessionToken, sessionToken)
        if (user.sessionToken === sessionToken) {
            loggedInUserData = user;
        }
    }

    // if (Object.keys(loggedInUserData).length === 0) {
    //     window.location.href = 'loginFailed.html';
    // }
    console.log(loggedInUserData)

    usernameProfile.innerHTML = `${loggedInUserData.username}`;

} else {
    // resultText.innerHTML = "You need to be logged in to access this page!"
}