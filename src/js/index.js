import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "../sass/style.scss";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "/src/js/chatBox";

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

// Branches Tags
const branchInfo = {
    "مدينة نصر": "15 شارع عباس العقاد - القاهرة ",
    "مصر الجديدة": "35 بجوار سينما روكسي - ميدان روكسي - القاهرة",
    المقطم: "160 شارع الجامعة الحديثة - العضبة الوسطى - المقطم - القاهرة ",
    الجيزة: "122 شارع الهـرم الرئيسى الكوم الأخـضـر بعـد مسـرح الزعيـم - الجيزة",
    التجمع: "شارع ال 90 الجنوبي أمام فندق تيوليب مول الرباط - التجمع الخامس - القاهرة",
};

// Get the ul element by its id
var list = document.getElementById("branches");
// Add a click event listener to the ul element
if (list) {
    list.addEventListener("click", function (event) {
        // Get the text of the clicked li element
        var branch = event.target.textContent;
        // Get the h3 and p elements by their ids
        var name = document.getElementById("branch-name");
        var address = document.getElementById("branch-address");
        // Set the innerHTML of the h3 and p elements to the branch name and address
        name.innerHTML = branch;
        address.innerHTML = branchInfo[branch];
        // Get the iframe element by its id
        var map = document.getElementById("map");
        // Use a switch statement to change the iframe src based on the branch name
        switch (branch) {
            case "مدينة نصر":
                // Change the src attribute of the iframe element to Seattle
                map.setAttribute(
                    "src",
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110313.64376053694!2d31.551995174903837!3d30.22848133829782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458175c541e1e35%3A0xc6fc336786a8e571!2z2LnYqNin2LMg2KfZhNi52YLYp9iv!5e0!3m2!1sar!2seg!4v1684512167196!5m2!1sar!2seg"
                );

                break;
            case "مصر الجديدة":
                // Change the src attribute of the iframe element to Seattle
                map.setAttribute(
                    "src",
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.0263085644483!2d31.318156523771094!3d30.093432866246705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e27b09a6045%3A0x3b1e67c611c406f9!2z2LPZitmG2YXYpyDYsdmI2YPYs9mK!5e0!3m2!1sar!2seg!4v1684512395429!5m2!1sar!2seg"
                );
                break;
            case "المقطم":
                // Change the src attribute of the iframe element to Seattle
                map.setAttribute(
                    "src",
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.5634935692196!2d31.31669492377376!3d29.99197232105381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458392285976735%3A0xd7b1d0b0facd0d0c!2z2LTYp9ix2Lkg2KfZhNis2KfZhdi52Kkg2KfZhNit2K_Zitir2KnYjCDYp9mE2KPYqNin2KzZitip2Iwg2YLYs9mFINin2YTZhdmC2LfZhdiMINmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1684512460381!5m2!1sar!2seg"
                );
                break;
            case "الجيزة":
                // Change the src attribute of the iframe element to Seattle
                map.setAttribute(
                    "src",
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110647.61348368345!2d31.330170764198762!3d29.929446303873576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145837c586ab8ce1%3A0xc609e26e38e717f8!2z2LTYp9ix2Lkg2KfZhNmH2LHZhQ!5e0!3m2!1sar!2seg!4v1684512503064!5m2!1sar!2seg"
                );
                break;
            case "التجمع":
                // Change the src attribute of the iframe element to Seattle
                map.setAttribute(
                    "src",
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27627.740797292216!2d31.503467664878638!3d30.052128391437485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458170c58240c53%3A0x4f4eb67ad149f5e2!2z2YHZhtiv2YIg2KrZiNmE2YrYqCDZgdin2YXZitmE2Yog2KjYp9ix2YM!5e0!3m2!1sar!2seg!4v1684512591530!5m2!1sar!2seg"
                );
                break;
            default:
            //Do nothing
        }
    });
}

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
