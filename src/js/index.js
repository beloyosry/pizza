import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "../sass/style.scss";
import "@fortawesome/fontawesome-free/js/all.min.js";

var navbarBrand = document.querySelector(".navbar-brand");
function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("navbar").classList.add("noTransparent");
        navbarBrand.style.color = "#1f1f1f";
    } else {
        document.getElementById("navbar").classList.remove("noTransparent");
        navbarBrand.style.color = "#fefefe";
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
        $(".nav-item:nth(1)").addClass("active");
    });
});
