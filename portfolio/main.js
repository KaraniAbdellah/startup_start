// start main


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
    gsap.to(".progress-header", {
        width: "100%",
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        },
    });


    // show portfolio
    $(".show_portfolio").on("click", function() {
        console.log($(".hidden-protfolio-box"))
        $(".hidden-protfolio-box").each(function() {
            $(this).removeClass("hidden-protfolio-box");
            $(".show_portfolio").addClass("hidden-protfolio-box");
        })
    });

    // Animate Section [Left-Right]
    gsap.utils.toArray(".leftToRight").forEach((element) => {
        gsap.from(element, {
            x: "-50vh",
            opacity: 0.5,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 60%",
                end: "top 120%",
                toggleActions: "play reverse play reverse",
                scrub: 1
            }
        });
    });


    // Animate Section [Bottom-Top]
    gsap.utils.toArray(".bottomToTop").forEach((element) => {
        gsap.from(element, {
            y: "30vh",
            opacity: 0.5,
            duration: 3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 120%",
                end: "top 100%",
                toggleActions: "play reverse play reverse",
                scrub: 1
            }
        });
        });
});


