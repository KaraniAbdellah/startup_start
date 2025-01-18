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
    gsap.to(".progress-header", {
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

    // let person_talents = $(".person_talents");
    // timeline = gsap.timeline();
    //     timeline.fromTo(
    //     person_talents,
    //     { opacity: 0, scale: 0.5, y: 100 },
    //     { opacity: 1, scale: 1, y: 0, duration: 0.8}
    // );

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



