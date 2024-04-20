const btn = document.querySelector(".submit-btn"),
    inputsField = document.querySelectorAll(".the-contact-us input"),
    textAreaFeild = document.querySelector(".the-contact-us textarea")


window.onload = function () {
    btn.addEventListener('click', function (event) {
        event.preventDefault();
    })
}
btn.addEventListener("click", () => {
    if (checkError() === true) {
        // If there are do this: 
        console.log(" 1 There are error") // delete this
        // btn.disabled = true;
    }
    else {
        // If there no error do this : 
        // This block of code sends the info from the user to the server to send the message
        console.log(" 2 There are no error") // delete this 
    }
})

inputsField.forEach((el) => {
    el.addEventListener("blur", () => {
        el.nextElementSibling
        addAndRemoveErrorClass(el)
    })
})
textAreaFeild.addEventListener("blur", () => {
    addAndRemoveErrorClass(textAreaFeild)
})

function addAndRemoveErrorClass(element) {

    let theLanguge = "toEnglish";
    if (localStorage.getItem("Languge") === "Eng") {
        theLanguge;
    }
    else {
        theLanguge = "toArabic"
    }

    let theUrlOfJSONFile = `../json/${theLanguge}.json`
    fetch(theUrlOfJSONFile)
        .then(getData => getData.json())
        .then(
            data => {
                if (element.value === '') {
                    element.parentElement.classList.add("error");
                    element.nextElementSibling.textContent = data.contact_us.errors["empty_field"];
                }
                else {
                    element.parentElement.classList.remove("error");
                    if (element.classList.value === "userEmail") {
                        if (checkEmail(element.value)) {
                            element.parentElement.classList.remove("error");
                            element.nextElementSibling.textContent = " ";
                        } else {
                            element.parentElement.classList.add("error");
                            element.nextElementSibling.textContent = data.contact_us.errors["wrong_email"];
                        }
                    } else if (element.classList.value === "userPhone") {
                        if (checkPhoneNumber(element.value)) {
                            element.parentElement.classList.remove("error");
                            element.nextElementSibling.textContent = " ";
                        } else {
                            element.parentElement.classList.add("error");
                            element.nextElementSibling.textContent = data.contact_us.errors["wrong_phone_number"];
                        }
                    }
                }
            }
        )

}

function checkEmail(email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(emailRegex)) {
        return true;
    }
    else {
        return false;
    }
}
function checkPhoneNumber(phoneNumber) {
    const phoneRegex = /^[0-9]+$/;
    if (phoneRegex.test(phoneNumber)) {
        return true;
    } else {
        return false;
    }
}
function checkError() {
    for (let i = 0; i < inputsField.length - 1; i++) {
        addAndRemoveErrorClass(inputsField[i])
        if (inputsField[i].parentElement.classList.item(0) === "error") {
            return true; // if there any error it will be return true
        }
    }
    return false;

}
