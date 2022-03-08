
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


});

$(document).ready(function () {
    var carousel = $("#owl-demo");
    carousel.owlCarousel({
        navigation: true,
        pagination: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsMobile: [479, 1],
        autoWidth: false,
        items: 4,
        navigationText: ["<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 20 20'><g transform='rotate(180 10 10)'><path fill='white' d='m6 15l5-5l-5-5l1-2l7 7l-7 7z'/></g></svg>", "<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 20 20'><g transform='rotate(180 10 10)'><path fill='white' d='m6 15l5-5l-5-5l1-2l7 7l-7 7z'/></g></svg>"],
    });
});
