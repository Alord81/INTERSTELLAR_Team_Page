const navBarLinks = document.querySelectorAll('.navbar-nav a')
function removeActiveClass() {
    navBarLinks.forEach(element => {
        element.classList.remove('active');
    });
}

navBarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // event.preventDefault();

        removeActiveClass();
        link.classList.add('active');
    });
});



