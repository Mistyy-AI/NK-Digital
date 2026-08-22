/* =========================
   MOBILE NAVIGATION
========================= */

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


/* =========================
   CLOSE MENU AFTER CLICKING
========================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList
            .remove("active");

    });

});