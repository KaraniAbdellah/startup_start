// Start Home Page


$(document).ready(function () {
    // Custom the Navbar
    let navbar = $(".my_navbar");
    let links = $("ul.links");
    navbar.click(function () {
        links.toggleClass("show");
        if (links.hasClass("show")) {
            navbar.html(`<i class="fa-solid fa-xmark fs-3"></i>`);
        } else {
            navbar.html(`<i class="fa-solid fa-bars fs-3"></i>`);
        }
    });

    // Custom the Date [year]
    let today_year = $("span.date").text(new Date().getFullYear());

    // Start Aniamtion For Section Content
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".progress-bar", {
        width: "100%",
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        },
    });

    // Aniamtion For Content Page
    let section_content_info = $(".info");
    let timeline = gsap.timeline();
        timeline.fromTo(
        section_content_info,
        { opacity: 0, scale: 0.5, x: -200 },
        { opacity: 1, scale: 1, x: 0, duration: 0.8}
    );

    let section_content_image = $("section .image");
    timeline = gsap.timeline();
        timeline.fromTo(
        section_content_image,
        { opacity: 0, scale: 0.5, x: 100 },
        { opacity: 1, scale: 1, x: 0, duration: 0.8}
    );

    let person_talents = $(".person_talents");
    timeline = gsap.timeline();
        timeline.fromTo(
        person_talents,
        { opacity: 0, scale: 0.5, y: 100 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8}
    );

    // Fix The Nav Item
    $(".nav_item").on("click", function() {
        $("html, body").animate({
            scrollTop: $("h2#partners").offset().top - 100
        }, 100);
    });


});



