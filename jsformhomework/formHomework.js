const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const passwordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");
const aboutInput = document.querySelector("#aboutMe");


//Name Error
function name() {
    regexName = /^[A-Za-z]{5,}$/;
    if(!regexName.test(nameInput.value)) {
        nameInput.setCustomValidity(
            "Your name must be longer than 5 letters and/or contain only letters."
        );
    } else {
        nameInput.setCustomValidity("");
    }
}
nameInput.addEventListener("change", name, false);

//Password Error
function password() {
    regexPassword = /^[A-Za-z0-9]{6,15}$/;
    if(!regexPassword.test(passwordInput.value)) {
        passwordInput.setCustomValidity(
            "Your password must be between 6 and 15 letters and/or numbers and contain no spaces or special characters"
        );
    } else {
        nameInput.setCustomValidity("");
    }
}
passwordInput.addEventListener("change", password, false);


//Email error
function email() {
    regexEmail = /^[A-Za-z0-9]+/;
    if(!regexEmail.test(emailInput.value)) {
        emailInput.setCustomValidity(
            "Please enter a valid email address."
        );
    } else {
        emailInput.setCustomValidity("");
    }
}
emailInput.addEventListener("change", email, false);

//About me Error
function aboutMe() {
    regexAboutMe = /^[A-Za-z0-9]{,250}$/;
    if(regexAboutMe.test(aboutInput.value)) {
        aboutInput.setCustomValidity(
            "There is a character limit of 250"
        );
    } else {
        aboutInput.setCustomValidity("");
    }
}
aboutInput