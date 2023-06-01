const form = document.querySelector("form");
const nameInput = document.querySelector(".name");

function checkName() {
    regexName = /^[A-Za-z]{5,+}$/;
    if(!regexName.test(nameInput.value)) {
        nameInput.setCustomValidity(
            "Your name must be longer than 5 letters and/or contain only letters."
        );
    } else {
        nameInput.setCustomValidity("");
    }
}
nameInput.addEventListener("change", checkName, false);