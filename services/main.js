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
    


    // Animation pour les questions-réponses
    $(".question").click(function () {
        const answer = $(this).next(".answer");
        if (answer.is(":visible")) {
            answer.slideUp(300); // Cache la réponse si elle est visible
            $(this).find(".toggle-icon path").attr("d", "M3 3L21 21L39 3"); // Change l'icône
        } else {
            $(".answer:visible").slideUp(300); // Cache toutes les autres réponses
            $(".toggle-icon path").attr("d", "M3 3L21 21L39 3"); // Reset les icônes
            answer.slideDown(300); // Affiche la réponse cliquée
            $(this).find(".toggle-icon path").attr("d", "M3 21L21 3L39 21"); // Change l'icône
        }
    });

    // Animation pour l'entête lors du défilement
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("header").addClass("scrolled").fadeIn(200);
        } else {
            $("header").removeClass("scrolled").fadeIn(200);
        }
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
