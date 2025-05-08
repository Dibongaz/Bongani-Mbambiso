document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.querySelector('.hamburger-menu'); // Changed from .hamburger-icon

    hamburgerButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
        hamburgerIcon.classList.toggle('open');
    });
});
