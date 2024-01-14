const submitForm = $('#formValidation');
const firstName = $('#firstname');
const lastName = $('#lastname');
const email = $('#email');
const phoneNumber = $('#phonenumber');
const password = $('#password');
const comfirmPassword = $('#comfirmpassword');

const firstNameValidation = (firstNameInput, event) => {
    if (firstNameInput.val() === "") {
        firstNameInput.next().text("Please enter your first name!");
        firstNameInput.addClass('error-border');
        event.preventDefault();
        return false;
    } else {
        firstNameInput.next().text("");
        firstNameInput.removeClass('error-border');
        firstNameInput.addClass('success-border');
        return true;
    }
}

const lastNameValidation = (lastNameInput, event) => {
    if (lastNameInput.val() === "") {
        lastNameInput.next().text("Please enter your last name!");
        lastNameInput.addClass('error-border');
        event.preventDefault();
        return false;
    } else {
        lastNameInput.next().text("");
        lastNameInput.removeClass('error-border');
        lastNameInput.addClass('success-border');
        return true;
    }
}

const emailValidation = (emailInput, event) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.val() === "") {
        emailInput.next().text("Please enter your email address!");
        emailInput.addClass('error-border');
        event.preventDefault();
        return false;
    }
    else if (!emailInput.val().match(emailRegex)) {
        emailInput.next().text("Please enter a valid email address!");
        emailInput.addClass('error-border');
        return false;
    }
    else {
        emailInput.next().text("");
        emailInput.removeClass('error-border');
        emailInput.addClass('success-border');
        return true;
    }
}

const phoneNumberValidation = (phoneNumberInput, event) => {
    if (phoneNumberInput.val() === "") {
        phoneNumberInput.next().text("Please enter your phone number!");
        phoneNumberInput.addClass('error-border');
        event.preventDefault();
        return false;
    } else {
        phoneNumberInput.next().text("");
        phoneNumberInput.removeClass('error-border');
        phoneNumberInput.addClass('success-border');
        return true;
    }
}

const passwordValidation = (passwordInput, event) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[@*+%$#&])(?=.*\d).{6,}$/;
    if (passwordInput.val() === "") {
        passwordInput.next().text("Please enter your password!");
        passwordInput.addClass('error-border');
        event.preventDefault();
        return false;
    }
    else if (!passwordInput.val().match(passwordRegex)) {
        passwordInput.next().text("Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @*$#&+% and 1 number.");
        passwordInput.addClass('error-border');
        return false;
    }
    else {
        passwordInput.next().text("");
        passwordInput.removeClass('error-border');
        passwordInput.addClass('success-border');
        return true;
    }
}

const comfirmPasswordValidation = (comfirmPasswordInput, event) => {
    if (comfirmPasswordInput.val() === "") {
        comfirmPasswordInput.next().text("Please comfirm password!");
        comfirmPasswordInput.addClass('error-border');
        event.preventDefault();
        return false;
    }
    else if (comfirmPasswordInput.val() !== password.val()) {
        comfirmPasswordInput.next().text("Password don't match");
        comfirmPasswordInput.addClass('error-border');
        return false;
    }
    else {
        comfirmPasswordInput.next().text("");
        comfirmPasswordInput.removeClass('error-border');
        comfirmPasswordInput.addClass('success-border');
        return true;
    }
}

const validateInputs = (e) => {
    e.preventDefault();

    const fValid = firstNameValidation(firstName, e);
    const lValid = lastNameValidation(lastName, e);
    const eValid = emailValidation(email, e);
    const phValid = phoneNumberValidation(phoneNumber, e);
    const paValid = passwordValidation(password, e);
    const cpaValid = comfirmPasswordValidation(comfirmPassword, e);

    if (fValid && lValid && eValid && phValid && paValid && cpaValid) {
        $('.load').css('display', 'block')
        setTimeout(() => {
            alert('Successful');
            location.reload();
        }, 3000);
    }

    return true;
}



submitForm.on('submit', validateInputs);

for (let p = 1; p < 3; p++) {
    const passwordHide = $(`.hidep${p}`);
    const passwordShow = $(`.showp${p}`);
    const passwordText = $(`.password${p}`);

    passwordHide.on("click", function () {
        passwordHide.hide();
        passwordShow.show();
        if (passwordText.attr("type") === "password") {
            passwordText.attr("type", "text");
        } else {
            passwordText.attr("type", "password");
        }
    });

    passwordShow.on("click", function () {
        passwordShow.hide();
        passwordHide.show();
        if (passwordText.attr("type") === "text") {
            passwordText.attr("type", "password");
        } else {
            passwordText.attr("type", "text");
        }
    });
}