// All Main Variable
const changeLanguageBtn = document.querySelector('.change-languge'),
    theLinks = document.querySelectorAll(".navbar-nav a"),
    stylesLinks = document.querySelectorAll('link');
//==== All Main Variable ====


checkTheLangugeInLocalStorge();

changeLanguageBtn.addEventListener("click", () => {
    changeLanguageBtn.classList.toggle("arabic")
    if (changeLanguageBtn.classList.item(1) === "arabic") {
        localStorage.setItem("Languge", "Ar");
        checkTheLangugeInLocalStorge()
        changeTheNavBar("toArabic", theLinks)
        changeLanguageBtn.innerHTML = "تغيير اللغة";
    }
    else {
        localStorage.setItem("Languge", "Eng");
        checkTheLangugeInLocalStorge()
        changeTheNavBar("toEnglish", theLinks)
        changeLanguageBtn.innerHTML = "change language";
    }
})


//----------------------------------------- All Functions -----------------------------------------
function changeTheNavBar(toLang = "toEnglish", theLinks) {
    let theUrlOfJSONFile = `../json/${toLang}.json`
    fetch(theUrlOfJSONFile)
        .then(getData => getData.json())
        .then(
            data => {
                let i = 0;
                for (let key in data.navBar) {
                    theLinks[i].textContent = data.navBar[key]
                    i += 1;
                }
            }
        )
}
// First Section
function changeLanguageForFirstSection(toLang = "toEnglish") {
    const introTextInfoFirstSpan = document.querySelectorAll(".intro-text-info h1 span"),
        textInfoParagraph = document.querySelector(".text-info p"),
        textInfoParagraphExploreMore = document.querySelector(".text-info p a");
    let theUrlOfJSONFile = `../json/${toLang}.json`
    fetch(theUrlOfJSONFile)
        .then(getData => getData.json())
        .then(
            data => {
                let i = 0;
                introTextInfoFirstSpan[0].textContent = data.first_section["text-title-first-part"]
                textInfoParagraph.innerHTML =
                    `
                ${data.first_section["text_content"]}
                <a href="#about-section">${data.first_section["explore_more"]}</a>
                `
                if (toLang != "toEnglish") {
                    textInfoParagraph.parentElement.setAttribute('dir', 'rtl')
                }
                else {
                    textInfoParagraph.parentElement.setAttribute('dir', 'ltr')
                }
            }
        )
}
// About Section
function changeLanguageForAboutSection(toLang = "toEnglish") {
    const aboutTitle = document.querySelector(".about-header"),
        textAboutParagraph = document.querySelector(".about-text p"),
        competitionsPart = document.querySelector(".competitions"),
        staffPart = document.querySelector(".staff");
    let theUrlOfJSONFile = `../json/${toLang}.json`
    fetch(theUrlOfJSONFile)
        .then(getData => getData.json())
        .then(
            data => {
                aboutTitle.innerHTML = `${data.about_section["text-title-first-part"]} <span>${data.about_section["text-title-second-part"]}</span>`;
                if (toLang != "toEnglish") {
                    textAboutParagraph.parentElement.setAttribute('dir', 'rtl')
                }
                else {
                    textAboutParagraph.parentElement.setAttribute('dir', 'ltr')
                }
                textAboutParagraph.innerHTML = data.about_section["the-paragraph"];
                staffPart.setAttribute("data-title", data.about_section["staff_part"]);
                competitionsPart.setAttribute("data-title", data.about_section["competition"]);
            }
        )
}
// Visions And Goals Section
function changeLanguageForVisionsAndGoalSection(toLang = "toEnglish") {
    const visionsTitle = document.querySelector(".our-visions-header"),
        VisionsParagraph = document.querySelector(".our-visions-text p"),
        visionsTextHeader = document.querySelector(".visions-text h4"),
        visionsTextParagraph = document.querySelector(".visions-text p"),
        goalsTextHeader = document.querySelector(".goal-text h4"),
        goalsTextParagraph = document.querySelector(".goal-text p")

    let theUrlOfJSONFile = `../json/${toLang}.json`
    fetch(theUrlOfJSONFile)
        .then(getData => getData.json())
        .then(
            data => {
                if (toLang == "toEnglish") {
                    visionsTitle.innerHTML = `${data.our_visions_and_goals["text-title-first-part"]} <span> ${data.our_visions_and_goals["text-title-second-part"]} </span> ${data.our_visions_and_goals["text-title-third-part"]} <span>${data.our_visions_and_goals["text-title-fourth-part"]}</span>`;
                }
                else {
                    visionsTitle.innerHTML = `<span>${data.our_visions_and_goals["text-title-first-part"]}</span> ${data.our_visions_and_goals["text-title-second-part"]} <span>${data.our_visions_and_goals["text-title-third-part"]}</span>`;
                }
                if (toLang != "toEnglish") {
                    VisionsParagraph.parentElement.setAttribute('dir', 'rtl')
                }
                else {
                    VisionsParagraph.parentElement.setAttribute('dir', 'ltr')
                }
                VisionsParagraph.innerHTML = data.our_visions_and_goals["the-paragraph"];
                visionsTextHeader.innerHTML = data.our_visions_and_goals["vision"];
                visionsTextParagraph.innerHTML = data.our_visions_and_goals["the-paragraph-visions"];
                goalsTextHeader.innerHTML = data.our_visions_and_goals["goals"];
                goalsTextParagraph.innerHTML = data.our_visions_and_goals["the-paragraph-goal"];
            }
        )
}
// Contact Us
function changeLanguageForContactUsSection(toLang = "toEnglish") {
    const contactUsTitle = document.querySelector(".contact-us-header"),
        contactUsParagraph = document.querySelector(".contact-us-text p"),
        contactUsUserNameInput = document.querySelector(".userName"),
        contactUsUserNamePhoneNumber = document.querySelector(".userPhone"),
        contactUsUserNameEmail = document.querySelector(".userEmail"),
        contactUsUserMessage = document.querySelector(".textArea"),
        contactUsBtn = document.querySelector(".submit-btn")

    let theUrlOfJSONFile = `../json/${toLang}.json`
    fetch(theUrlOfJSONFile)
        .then(getData => getData.json())
        .then(
            data => {
                contactUsTitle.innerHTML = `${data.contact_us["text-title-first-part"]} <span> ${data.contact_us["text-title-second-part"]} </span>`;
                if (toLang != "toEnglish") {
                    contactUsParagraph.parentElement.setAttribute('dir', 'rtl')
                }
                else {
                    contactUsParagraph.parentElement.setAttribute('dir', 'ltr')
                }
                contactUsParagraph.innerHTML = data.contact_us["the-paragraph"]
                contactUsUserNameInput.setAttribute("placeholder", data.contact_us["user_name_placeholder"])
                contactUsUserNamePhoneNumber.setAttribute("placeholder", data.contact_us["user_phone_number_placeholder"])
                contactUsUserNameEmail.setAttribute("placeholder", data.contact_us["user_email_placeholder"])
                contactUsUserMessage.setAttribute("placeholder", data.contact_us["user_messeage_placeholder"])
                contactUsBtn.setAttribute("value", data.contact_us["send_btn"])
            }
        )
}
// Footer
function changeLanguageForFooterSection(toLang = "toEnglish") {
    const footerTitle = document.querySelector(".first-part-about-company h1"),
        footerParagraph = document.querySelector(".first-part-about-company p"),
        footerEstablished = document.querySelector(".established"),
        footerLinks = document.querySelectorAll(".footerLinks"),
        footerNumbersAndEmailPart = document.querySelector(".Contact-and-social-media-links > ul")

    let theUrlOfJSONFile = `../json/${toLang}.json`
    fetch(theUrlOfJSONFile)
        .then(getData => getData.json())
        .then(
            data => {
                footerTitle.innerHTML = data.footer["text-title"];
                if (toLang != "toEnglish") {
                    footerParagraph.parentElement.setAttribute('dir', 'rtl')
                    footerNumbersAndEmailPart.setAttribute('dir', 'rtl')
                }
                else {
                    footerParagraph.parentElement.setAttribute('dir', 'ltr')
                    footerNumbersAndEmailPart.setAttribute('dir', 'ltr')
                }
                footerParagraph.innerHTML = data.footer["the-paragraph"]
                footerEstablished.innerHTML = data.footer["copyright"]
                let i = 0;
                for (let key in data.footer.theLinks) {
                    footerLinks[i].textContent = data.footer.theLinks[key]
                    if (toLang != "toEnglish") {
                        footerLinks[i].parentElement.setAttribute('dir', 'rtl')
                    }
                    else {
                        footerLinks[i].parentElement.setAttribute('dir', 'ltr')
                    }
                    i += 1;
                }
            }
        )
}

function checkTheLangugeInLocalStorge() {
    let getTheLanguge = localStorage.getItem("Languge")


    if (getTheLanguge === "Eng") {
        changeTheNavBar("toEnglish", theLinks)
        changeLanguageForFirstSection("toEnglish")
        changeLanguageForAboutSection("toEnglish")
        changeLanguageForVisionsAndGoalSection("toEnglish")
        changeLanguageForContactUsSection("toEnglish")
        changeLanguageForFooterSection("toEnglish")
        stylesLinks[5].setAttribute("href", "/CSS/style.css")
    }
    else {
        changeTheNavBar("toArabic", theLinks)
        changeLanguageForFirstSection("toArabic")
        changeLanguageForAboutSection("toArabic")
        changeLanguageForVisionsAndGoalSection("toArabic")
        changeLanguageForContactUsSection("toArabic")
        changeLanguageForFooterSection("toArabic")
        stylesLinks[5].setAttribute("href", "/CSS/style-Ar-copy.css")
    }
}
