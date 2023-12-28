function loginButton() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let number = document.getElementById("number");
    let result = document.getElementById("result");
    let result2 = document.getElementById("result2");
    let result3 = document.getElementById("result3");
    let line1 = document.getElementById("line1");
    let line2 = document.getElementById("line2");
    let line3 = document.getElementById("line3");


    let emailValidator = /^(?=.*[a-z])(?=.*(@gmail.com))/gm
    let passwordValidatorLV1 = /(?=.*[a-zA-Z\d])[a-zA-Z\d]{8,}/gm
    let passwordValidatorLV2 = /(?=.*[a-zA-Z ])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z \d!@#$%^&*()]{8,}/gm
    let passwordValidatorLV3 = /(?=.*[a-z])(?=.*[A-Z])(?=.* )(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z \d!@#$%^&*()]{16,}/gm
    let numberValidator = /^(?=.*[1-9 ])[1-9 ]{3,}$/gm


    if (emailValidator.test(email.value) === true) {
        result.style.color = "green";
        result.innerHTML = "ვააა ცაგო ბრატ :)";
    } else if (emailValidator.test(email.value) === false) {
        result.style.color = "red";
        result.innerHTML = "ეეე ში ხო არა გაქ >:(";
    }

    if (passwordValidatorLV3.test(password.value) === true) {
        line1.style.backgroundColor = "#13cb13";
        line2.style.backgroundColor = "#13cb13";
        line3.style.backgroundColor = "#13cb13";
        result2.style.color = "13cb13";
        result2.innerHTML = "პაროლი ძლიერია";
    } else if (passwordValidatorLV2.test(password.value) === true) {
        line1.style.backgroundColor = "yellow";
        line2.style.backgroundColor = "yellow";
        line3.style.backgroundColor = "#696969";
        result2.style.color = "#ecec00";
        result2.innerHTML = "პაროლი გამოყენებადია ბაგრამ ფრთხილად იყავით";
    } else if (passwordValidatorLV1.test(password.value) === true) {
        line1.style.backgroundColor = "red";
        line2.style.backgroundColor = "#696969";
        line3.style.backgroundColor = "#696969";
        result2.style.color = "red";
        result2.innerHTML = "პაროლი სუსტია";
    } else {
        line1.style.backgroundColor = "red";
        line2.style.backgroundColor = "red";
        line3.style.backgroundColor = "red";
        result2.style.color = "red";
        result2.innerHTML = "პაროლი ძალიან სუსტია!!!";
    }

    if (numberValidator.test(number.value) === true) {
        result3.style.color = "green";
        result3.innerHTML = "ნომერი სწორია"
    } else {
        result3.style.color = "red";
        result3.innerHTML = "ნომერი არასწორია"
    }

    console.log(emailValidator.test(email.value) === true && passwordValidatorLV3.test(password.value) === true && numberValidator.test(number.value) === true)
    console.log(emailValidator.test(email.value) === true && passwordValidatorLV2.test(password.value) === true && numberValidator.test(number.value) === true)
    if (emailValidator.test(email.value) === true && passwordValidatorLV3.test(password.value) === true && numberValidator.test(number.value) === true) {
        document.getElementById("finishedButton").style.display = "block";
        console.log("Hello World");
    } else if (emailValidator.test(email.value) === true && passwordValidatorLV2.test(password.value) === true && numberValidator.test(number.value) === true) {
        document.getElementById("finishedButton").style.display = "none";
    } else {
        document.getElementById("finishedButton").style.display = "none";
    }
    // if (emailValidator.test(email.value) === true && passwordValidatorLV2.test(password.value) === true && numberValidator.test(number.value) === true) {
    //     document.getElementById("finishedButton").style.display = "block";
    //     console.log("Hello World");
    // } else {
    //     document.getElementById("finishedButton").style.display = "none";
    // }
}