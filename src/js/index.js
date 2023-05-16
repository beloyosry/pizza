import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "../sass/style.scss";
import "@fortawesome/fontawesome-free/js/all.min.js";

document.getElementById("date").innerHTML = new Date().getFullYear();

var navbarBrand = document.querySelector(".navbar-brand");
var logo = document.querySelector(".logo");
var logoTransparent = document.querySelector(".logo-transparent");

function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("navbar").classList.add("noTransparent");
        navbarBrand.style.color = "#1f1f1f";
        logo.style.display = "none";
        logoTransparent.style.display = "initial";
    } else {
        document.getElementById("navbar").classList.remove("noTransparent");
        navbarBrand.style.color = "#fefefe";
        logo.style.display = "initial";
        logoTransparent.style.display = "none";
    }
}
window.onscroll = function () {
    scrollFunction();
};

$(function () {
    $(".nav-item").on("click", function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });

    $(".navbar-brand").on("click", function () {
        $(".nav-item").removeClass("active");
        $(".nav-item:first-child").addClass("active");
    });

    $(".oreder-now").on("click", function () {
        $(".nav-item").removeClass("active");
        $(".nav-item:nth(2)").addClass("active");
    });

    $("#form-product-selection").on("submit", function () {
        alert("أضيف المُنتج إلى عربة الشراء");
    });
    $(".add-to-cart-btn").on("click", function () {
        alert("أضيف المُنتج إلى عربة الشراء");
    });

    $('.product-option input[type="radio"]').on("change", function () {
        $(this).parents(".product-option").siblings().removeClass("active");
        $(this).parents(".product-option").addClass("active");
    });

    $("#total-price").text($("[data-product-price]").text());

    $("#quantity").on("change", function () {
        var quantity = $(this).val();
        var price = $("[data-product-price]").text();
        var total = quantity * parseInt(price);
        $("#total-price").text(`${total}$`);
    });
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();
