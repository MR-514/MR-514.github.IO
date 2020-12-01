const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButtton.addEventListner('click', () => {
        navbarLinks.classList.toggle('active')
    })