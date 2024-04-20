const infoNumberCount = document.querySelectorAll(".counter"),
    theSection = document.querySelector("#about-section");

let started = false;


window.onscroll = function () {
    if ((window.scrollY + 500) >= (theSection.offsetTop - 76)) {
        if (!started) {
            infoNumberCount.forEach((number) => startCount(number));
        }
        started = true
    }
}

function startCount(element) {
    let goal = element.dataset.goal;
    let count = setInterval(() => {
        element.textContent++;
        if (element.textContent == goal || element.textContent == 90) {
            if (element.textContent == 90) {
                element.textContent = '+99'
            }
            clearInterval(count)
        }
    }, 2000 / goal);
}

// infoNumberCount.forEach((number) => startCount(number));
