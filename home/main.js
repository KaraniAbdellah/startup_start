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

    // Fix The Nav Item
    $(".nav_item").on("click", function() {
        $("html, body").animate({
            scrollTop: $("h2#partners").offset().top - 100
        }, 100);
    });

    // Load More Talent
    let load_more_talent = $(".load_more_talent");
    load_more_talent.on("click", function () {
        $(".hidden_talent").each(function () {
            $(this).removeClass("hidden_talent");
            load_more_talent.addClass("hidden_load_more_talent");
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

    // Animate Section [Left-Right]
    gsap.utils.toArray(".leftToRight").forEach((element) => {
        gsap.from(element, {
          x: "-50vh",
          opacity: 0.5,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "top 20%",
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



