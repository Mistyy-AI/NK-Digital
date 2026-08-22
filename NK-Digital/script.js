/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    if (menu) {
        menu.classList.toggle("active");
    }

}


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks =
    document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const menu =
            document.querySelector(".nav-links");

        if (menu) {
            menu.classList.remove("active");
        }

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                .getElementById("name")
                .value
                .trim();


            const business =
                document
                .getElementById("business")
                .value
                .trim();


            const service =
                document
                .getElementById("service")
                .value;


            const budget =
                document
                .getElementById("budget")
                .value;


            const message =
                document
                .getElementById("message")
                .value
                .trim();


            const whatsappMessage =

`Hi NK Digital!

I'd like to discuss a project.

Name: ${name}

Business: ${business}

Service: ${service}

Budget: ${budget}

Project details:
${message}

I found NK Digital through your portfolio.`;


            const whatsappURL =
                "https://wa.me/27817931084?text=" +
                encodeURIComponent(whatsappMessage);


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* =========================
   PROJECT PREVIEWS
========================= */

const projectFrames =
    document.querySelectorAll(
        ".project-preview iframe"
    );


projectFrames.forEach(function(frame) {

    frame.addEventListener("load", function() {

        console.log(
            "Project loaded:",
            frame.title
        );

    });

});