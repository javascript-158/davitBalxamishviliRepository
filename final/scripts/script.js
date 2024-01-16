function LoginButton() {
    let backgroundLogin = document.getElementById("backgroundLogin");

    backgroundLogin.innerHTML = `
    <div id="backgroundLogin" onclick="xmark()" class="backgroundLogin">
        <div id="loginWindow" class="login_window">
            <button class="x" onclick="xmark()"><i class="fa-solid fa-xmark"></i></button>
            <form class="login_window_form">
                <input type="text">
                <input type="text">
            </form>
        </div>    
    </div>
    `;
}
// value

function xmark() {
    let backgroundLogin = document.getElementById("backgroundLogin");

    backgroundLogin.innerHTML = `
    <div id="backgroundLogin">
        <div id="loginWindow">
        </div>
    </div>
    `;

}


