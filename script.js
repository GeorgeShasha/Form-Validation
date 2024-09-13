const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

const validateName = () => {
    const name = document.getElementById("contact-name").value;

    if (name.length === 0) {
        nameError.innerHTML = "Name is Required.";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write Fullname.";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

const validatePhone = () => {
    const phone = document.getElementById("contact-phone").value;

    if (phone.length === 0) {
        phoneError.innerHTML = "Phone Number is Required.";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "Write Full Phone Number Digits.";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Write Only Numbers.";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

const validateEmail = () => {
    const email = document.getElementById("contact-email").value;

    if (email.length === 0) {
        emailError.innerHTML = "Email Address is Required.";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = "Write example@example.com";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

const validateMessage = () => {
    const message = document.getElementById("contact-message").value;
    const required = 30;
    const left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + " more characters required.";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

const validateForm = () => {
    if (!validateName() || !validatePhone() || !validateMessage() || !validateEmail) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please Check your Form and Fix errors.";
        setTimeout(function () { submitError.style.display = "none" }, 3000);
        return false;
    }
}