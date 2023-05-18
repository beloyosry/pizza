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
    $(".nav-link").on("click", function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });

    $(".location-item").on("click", function () {
        $(".location-item").removeClass("active");
        $(this).addClass("active");
    });

    $(".navbar-brand").on("click", function () {
        $(".nav-item").removeClass("active");
        $(".nav-item:first-child").addClass("active");
    });

    $(".order-now").on("click", function () {
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

    // price calculations

    var radio = $("input[name='size']");
    var price = parseInt($("[data-product-price]").text());
    $("#total-price").text(`${price}$`);
    radio.on("change", function () {
        var size = $(this).val();
        var newPrice;
        if (size == "sm") {
            newPrice = price;
        } else if (size == "m") {
            newPrice = price + 20;
        } else if (size == "l") {
            newPrice = price + 50;
        }
        $("[data-product-price]").text(`${newPrice}$`);
        $("#total-price").text(`${newPrice}$`);

        $("#quantity").on("change", function () {
            var quantity = $(this).val();
            var total = quantity * parseInt(newPrice);
            $("#total-price").text(`${total}$`);
        });
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
