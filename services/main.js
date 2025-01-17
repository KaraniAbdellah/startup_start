// script.js

$(document).ready(function () {
    $('.question').on('click', function () {
        // Fermer les autres réponses ouvertes
        $('.question').not(this).removeClass('open').next('.answer').slideUp();

        // Bascule de l'état actuel
        $(this).toggleClass('open').next('.answer').slideToggle();
    });
    // Custom the Navbar
    let navbar = $(".my_navbar");
    let links = $("ul.links");
    navbar.click(function () {
        links.toggleClass("show");
        if (links.hasClass("show")) {
            navbar.html(<i class="fa-solid fa-xmark fs-3"></i>);
        } else {
            navbar.html(<i class="fa-solid fa-bars fs-3"></i>);
        }
    });

    // Custom the Date [year]
    let today_year = $("span.date").text(new Date().getFullYear());
    // Fade-in animations for the header
    $(".pricing").hide().fadeIn(2000);
    $(".main-content h2").hide().fadeIn(1500);

    // Slide animations for the pricing cards
    $(".pricing-card").each(function (index) {
        $(this).hide().delay(500 * index).slideDown(1000);
    });

    // Hover effects for pricing cards
    $(".pricing-card").hover(
        function () {
            $(this).addClass("shadow-lg").css("transform", "scale(1.05)");
        },
        function () {
            $(this).removeClass("shadow-lg").css("transform", "scale(1)");
        }
    );

    // FAQ toggle animations
    $(".question").on("click", function () {
        const answer = $(this).next(".answer");
        const icon = $(this).find(".toggle-icon");
        if (answer.is(":visible")) {
            answer.slideUp(300);
            icon.css("transform", "rotate(0deg)");
        } else {
            answer.slideDown(300);
            icon.css("transform", "rotate(180deg)");
        }
    });

    // Bounce animation for the buttons
    $("button").hover(
        function () {
            $(this).effect("bounce", { times: 3 }, 300);
        }
    );

    // Color transition on hover for FAQ section
    $(".faq").hover(
        function () {
            $(this).css("background-color", "#e0f7fa");
        },
        function () {
            $(this).css("background-color", "white");
        }
    );
});