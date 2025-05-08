document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburgerButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
        hamburgerButton.classList.toggle('open');
    });
});
