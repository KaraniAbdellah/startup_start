$(document).ready(function () {
    

    AOS.init();
    
    // Animate the Projects Heading
    $('#projects h2').delay(800).fadeTo(1500, 1).css({
        transform: 'translateY(0)',
        opacity: 1
    });


    // Custom the Navbar
    let navbar = $(".my_navbar");
    console.log(navbar);
    let links = $("ul.links");
    navbar.click(function () {
        links.toggleClass("show");
        if (links.hasClass("show")) {
            navbar.html(`<i class="fa-solid fa-xmark fs-3"></i>`);
        } else {
            navbar.html(`<i class="fa-solid fa-bars fs-3"></i>`);
        }

        document.addEventListener("DOMContentLoaded", function () {
            const waveSection = document.querySelector('.wave-section');
            const boxes = document.querySelectorAll('.box');

            // Function to check if the wave-section is in the viewport
            function checkScroll() {
                const rect = waveSection.getBoundingClientRect();
                const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

                if (isInView && !waveSection.classList.contains('animated')) {
                    // Trigger animation when the section is in the viewport
                    waveSection.classList.add('animated');
                } else if (!isInView && waveSection.classList.contains('animated')) {
                    // Reset animation when the section is out of view
                    waveSection.classList.remove('animated');
                }
            }

            // Call checkScroll when the page is loaded or scrolled
            window.addEventListener('scroll', checkScroll);
            checkScroll(); // Initial check in case the section is already in view on load


        });
    });
    
    // Start Aniamtion For Section Content
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".progress-header", {
        width: "100%",
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        },
    });

});



