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
        images: '',
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
// console.log(sessionToken)
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
        // console.log(user.sessionToken, sessionToken)
        if (user.sessionToken === sessionToken) {
            loggedInUserData = user;
        }
    }

    // if (Object.keys(loggedInUserData).length === 0) {
    //     window.location.href = 'loginFailed.html';
    // }
    console.log(loggedInUserData.email)

    usernameProfile.innerHTML = `${loggedInUserData.username}`;


} else {
    // resultText.innerHTML = "You need to be logged in to access this page!"
}
// 7122787
let userimg = document.getElementById('userimg');
let userimg2 = document.getElementById('userimg').src;

function randomAnime() {
    let randomAnime = (Math.floor(Math.random() * 10));


    fetch(`https://kitsu.io/api/edge/anime?filter[categories]=adventure`, {

    }).then(response => response.json()).then(animeAPI => {
        // let userimg = document.getElementById('userimg');



        loggedInUserData.images = animeAPI.data[randomAnime].attributes.posterImage.original;

        

        // userimg.setAttribute("src", animeAPI.data[randomAnime].attributes.posterImage.original);
        userimg.setAttribute("src", loggedInUserData.images);
    })

}

console.log(loggedInUserData.images);

// guram

userimg.setAttribute("src", loggedInUserData.images);

function randomDog() {
    fetch(`https://random.dog/woof.json`, {

    }).then(response => response.json()).then(randomDog => {


        userimg.setAttribute("src", randomDog.url);
    })
}

function bbbb() {
    let buttons = document.getElementById("randomButtons");
    let buttons2 = document.getElementById("randomButtons2");
    let buttons3 = document.getElementById("randomButtons3");
    let buttons4 = document.getElementById("randomButtons4");
    let Show = document.getElementById("Show");

    buttons.style.display = "block"
    buttons2.style.display = "block"
    buttons3.style.display = "block"
    buttons4.style.display = "block"
    Show.style.display = "none"
}

function dddd() {
    let buttons = document.getElementById("randomButtons");
    let buttons2 = document.getElementById("randomButtons2");
    let buttons3 = document.getElementById("randomButtons3");
    let buttons4 = document.getElementById("randomButtons4");
    let Show = document.getElementById("Show");

    buttons.style.display = "none"
    buttons2.style.display = "none"
    buttons3.style.display = "none"
    buttons4.style.display = "none"
    Show.style.display = "block"
}

function posts() {
    let postsText = document.createElement('div');
    let postsDiv = document.getElementById('postsDiv');

    let postsInput = document.getElementById('postsInput').value;

    let postsData = localStorage.getItem('postsData');
    postsData = JSON.parse(postsData);

    let post = {
        postsText: postsText,
        username: loggedInUserData.username,
        text: postsInput
    }
    console.log(post.postsText);
    post.postsText.innerHTML = `
    <div>
    <div class="user_container">
        <img src="${userimg}" id="userimg" class="userimg" alt="">
        <h3 id="usernameProfile" class="hello user">${post.username}</h3>
    </div>
    <p class="hello post_text">${postsInput}</p>
    </div>
    `

    postsDiv.appendChild(postsText);
    postsData.push(post);
    localStorage.setItem('postsData', JSON.stringify(postsData));
}

function Saved() {
    let randomAnime = (Math.floor(Math.random() * 10));

    fetch(`https://kitsu.io/api/edge/anime?filter[categories]=adventure`, {

    }).then(response => response.json()).then(animeAPI => {
        let userimg = document.getElementById('userimg');

        userimg.setAttribute("src", animeAPI.data[randomAnime].attributes.posterImage.original);
    })

}































































































// let pueueImagesArray = [],
//     saveForm = document.querySelector("#saved-form"),
//     queuedForm = document.querySelector("#queued-form"),
//     savedDiv = document.querySelector(".saved-div"),
//     queuedDiv = document.querySelector(".queued-div"),
//     inputDiv = document.querySelector(".input-div"),
//     input = document.querySelector(".input-div  input"),
//     serverMasage = document.querySelector(".server-message"),
//     deleteImages = [];

// // SAVED IN SEVER IMAGES

// // QUEUED IN FRONTEND IMAGES

// input.addEventListener("change", () => {
//     const files = input.files

//     for (let i = 0; i < files.length; i++) {
//         pueueImagesArray.push(files[i])
//     }
//     queuedForm.reset()
//     displayQueuedImages()
// })

// inputDiv.addEventListener("drop", (e) => {
//     e.preventDefault()
//     const files = e.dataTransfer.files
//     for(let i = 0; i < files.length; i++) {
//         if (!files[i].type.match("image")) continue

//         if(pueueImagesArray.every(image => image.name !== files[i].name))
//         pueueImagesArray.push(files[i])
//     }
//     displayQueuedImages()
// })


// console.log(usersData)

// function displayQueuedImages() {
//     // let usersData = localStorage.getItem('usersData');
//     // usersData = JSON.parse(usersData);

//     let images = ""

//     pueueImagesArray.forEach((image, index) => {
//         images += `
//         <div class="image">
//             <img src="${URL.createObjectURL(image)}" class="userimg" alt="image">
//             <span onclick="deleteQueuedImage(${index})">&times;</span>
//         </div>
//         `
//     })
//     queuedDiv.innerHTML = images

//     loggedInUserData.images = images
// }

// email: "balxamishvilidavit40@gmail.com"
// password: "gptuuu"
// sessionToken: "LHOpTkwSW5SPqSrVvrEdiFyi1JenDuTLziv4"
// username: "Datan700"



// function Upload() {
//     let UsersData = localStorage.getItem('usersData');
//     UsersData = JSON.parse(UsersData);
//     console.log(UsersData)

//     let userimg = {
//         email: email,
//         username: username,
//         password: password
//     }

//     // localStorage.setItem('usersData', JSON.stringify(usersData));
// }

// function deleteQueuedImage(index) {
//     pueueImagesArray.splice(index, 1)
//     displayQueuedImages()
// }

// queuedForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     sendQueuedImagesToServer()
// })






















// function sendQueuedImagesToServer() {
// const formData = new FormData(queuedForm)

// pueueImagesArray.forEach((image, index) => {
//     formData.append(`file[${index}]`, image)
// })

//     fetch("upload", {
//         method: "POST",
//         body : formData
//     })

//     .then(response => {
//         if (response.status !== 200) throw Error(response.statusText)
//         location.reload()
//     })

//     .catch(error => {
//         serverMasage.innerHTML = error
//         serverMasage.style.cssText = "background-color: #ea5050; color: red;"
//     })
// }

