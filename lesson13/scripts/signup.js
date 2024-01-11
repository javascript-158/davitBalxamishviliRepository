let tokens = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const tokensLength = tokens.length;

    for (let i = 0; i < length; i++) {
        result = result + tokens.charAt(Math.floor(Math.random() * tokensLength));
    }
    return result;
}

function signupbutton() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let savePassword = document.getElementById('savePassword').checked;

    let usersData = localStorage.getItem('usersData');
    usersData = JSON.parse(usersData);

    let userExists = false;

    let loginForm = document.querySelector('form');

    let timemer = new Date();

    timemer.setTime(timemer.getTime() + (5 * 24 * 60 * 1000));

    console.log(timemer);

    let expires = "expires=" + timemer.toUTCString();
    let sessionToken = generateString(36);

    for (let user = 0; user < usersData.length; user++) {
        if (usersData[user].email === email && usersData[user].password === password) {
            if (savePassword === true) {
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
        document.getElementById("abcabc").innerHTML = "no ok";
    } else {
        // window.location.href = 'loginSuccess.html';
        document.getElementById("abcabc").innerHTML = "ok";
    }

    localStorage.setItem('usersData', JSON.stringify(usersData));
}
console.log(new Date());