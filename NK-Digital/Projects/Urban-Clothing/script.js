/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


/* =========================
   CLOSE MOBILE MENU
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


/* =========================
   PRODUCT QUICK VIEW
========================= */

function showProduct(productName) {

    const modal = document.getElementById("productModal");

    const title = document.getElementById("modalTitle");

    title.textContent = productName;

    modal.classList.add("active");

}


/* =========================
   CLOSE PRODUCT
========================= */

function closeProduct() {

    const modal = document.getElementById("productModal");

    modal.classList.remove("active");

}


/* =========================
   CLOSE MODAL WHEN
   CLICKING OUTSIDE
========================= */

function closeModal(event) {

    if (event.target.id === "productModal") {

        closeProduct();

    }

}


/* =========================
   NEWSLETTER
========================= */

function subscribe(event) {

    event.preventDefault();

    alert(
        "Thanks for subscribing to Urban Clothing."
    );

    event.target.reset();

}