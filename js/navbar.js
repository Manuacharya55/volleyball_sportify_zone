
const hamburger = document.querySelector('.primary-navbar-holder');
const hamburgerOpen = document.querySelector('.fa-bars');
const hamburgerClose = document.querySelector('.fa-circle-xmark');
hamburgerOpen.addEventListener('click', () => {
    hamburger.classList.add('hamburger-active');
})

hamburgerClose.addEventListener('click', () => {
    hamburger.classList.remove('hamburger-active');
})




