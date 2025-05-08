document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerNav = document.getElementById('hamburger-nav');

    hamburgerButton.addEventListener('click', function() {
        // Toggle menu visibility
        mobileMenu.classList.toggle('open');
        
        // Toggle hamburger animation
        hamburgerButton.classList.toggle('open');
        
        // Toggle body scroll
        document.body.classList.toggle('no-scroll');
        
        // Toggle nav active state (if needed for other styles)
        hamburgerNav.classList.toggle('active');
    });
});
