import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "webpack-jquery-ui";
import "webpack-jquery-ui/css";
import "jquery/dist/jquery.slim.min.js";
import "jquery/dist/jquery.min";
import "popper.js";
import "../sass/style.scss";
import "/src/js/chatBox";
import "./lang";
import { translations } from "./lang";
import { currentLang } from "./lang";
import AOS from "aos";
import { event } from "jquery";
import "./cart";
import "./pizzaOfferComponent";
import "jquery-ui-touch-punch/jquery.ui.touch-punch.min.js";

AOS.init();
if (document.getElementById("date")) {
    document.getElementById("date").innerHTML = new Date().getFullYear();
}

var navbar = document.getElementById("navbar");
var navbarBrand = document.querySelector(".navbar-brand");
var logo = document.querySelector(".logo");
var logoTransparent = document.querySelector(".logo-transparent");
var cartList = document.querySelector(".cart");
var credit = document.querySelector(".credit");

if (navbar) {
    function scrollFunction() {
        if (document.documentElement.scrollTop > 200) {
            navbar.classList.add("noTransparent");
            navbarBrand.style.color = "#1f1f1f";
            logo.style.display = "none";
            logoTransparent.style.display = "initial";
            cartList.style.color = "#eb173d";
            if (credit) {
                credit.style.color = "#eb173d";
            }
        } else {
            navbar.classList.remove("noTransparent");
            navbarBrand.style.color = "#fefefe";
            logo.style.display = "initial";
            logoTransparent.style.display = "none";
            cartList.style.color = "#fefefe";
            if (credit) {
                credit.style.color = "#fefefe";
            }
        }
    }
    window.onscroll = function () {
        scrollFunction();
    };
}

window.addEventListener("load", (event) => {
    document.querySelector(".chatbox-wrapper").style.display = "none";
    document.body.style.overflow = "hidden";
    setTimeout(function () {
        document.getElementById("splash-screen").style.display = "none";
        document.querySelector(".chatbox-wrapper").style.display = "initial";
        document.body.style.overflow = "auto";
    }, 3000);
});

export function createBranchesList() {
    const branchesList = document.querySelector("#branches");
    branchesList.innerHTML = "";
    let firstItem = true;
    for (const branchKey in translations.branchInfo[currentLang]) {
        if (translations.branchInfo[currentLang].hasOwnProperty(branchKey)) {
            const branchName =
                translations.branchInfo[currentLang][branchKey].name;
            const li = document.createElement("li");
            li.classList.add("location-item", "p-2");
            if (firstItem) {
                li.classList.add("active");
                firstItem = false;
            }
            const a = document.createElement("a");
            a.classList.add("location-link");
            a.style.cursor = "pointer";
            a.textContent = branchName;
            a.setAttribute("data-branch-key", branchKey);
            li.appendChild(a);
            branchesList.appendChild(li);
            $(".location-item").on("click", function (event) {
                $(".location-item").removeClass("active");
                $(this).addClass("active");
                let branchKey;
                if ($(event.target).hasClass("location-link")) {
                    branchKey = $(event.target).attr("data-branch-key");
                } else {
                    const locationLink = $(event.target).find(".location-link");
                    console.log(locationLink.attr("data-branch-key"));
                    branchKey = locationLink.attr("data-branch-key");
                }
                console.log(branchKey);
            });
        } else {
            console.error(
                `Branch with key '${branchKey}' not found in translations`
            );
        }
    }
}

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

        var branchKey = event.target.getAttribute("data-branch-key");
        console.log(branchKey);
        name.innerHTML = translations.branchInfo[currentLang][branchKey].name;
        address.innerHTML =
            translations.branchInfo[currentLang][branchKey].address;
        // Set the innerHTML of the h3 and p elements to the branch name and address
        // name.innerHTML = branch;
        // address.innerHTML = translations.branchInfo[currentLanguage][branch];
        // Get the iframe element by its id
        var map = document.getElementById("map");
        map.setAttribute("src", getMapSrc(branch));
        // Use a switch statement to change the iframe src based on the branch name
        function getMapSrc(branchName) {
            switch (branchName) {
                case "مدينة نصر":
                    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110313.64376053694!2d31.551995174903837!3d30.22848133829782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458175c541e1e35%3A0xc6fc336786a8e571!2z2LnYqNin2LMg2KfZhNi52YLYp9iv!5e0!3m2!1sar!2seg!4v1684512167196!5m2!1sar!2seg";
                case "مصر الجديدة":
                    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.0263085644483!2d31.318156523771094!3d30.093432866246705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e27b09a6045%3A0x3b1e67c611c406f9!2z2LPZitmG2YXYpyDYsdmI2YPYs9mK!5e0!3m2!1sar!2seg!4v1684512395429!5m2!1sar!2seg";
                case "المقطم":
                    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.5634935692196!2d31.31669492377376!3d29.99197232105381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458392285976735%3A0xd7b1d0b0facd0d0c!2z2LTYp9ix2Lkg2KfZhNis2KfZhdi52Kkg2KfZhNit2K_Zitir2KnYjCDYp9mE2KPYqNin2KzZitip2Iwg2YLYs9mFINin2YTZhdmC2LfZhdiMINmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1684512460381!5m2!1sar!2seg";
                case "الجيزة":
                    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110647.61348368345!2d31.330170764198762!3d29.929446303873576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145837c586ab8ce1%3A0xc609e26e38e717f8!2z2LTYp9ix2Lkg2KfZhNmH2LHZhQ!5e0!3m2!1sar!2seg!4v1684512503064!5m2!1sar!2seg";
                case "التجمع":
                    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27627.740797292216!2d31.503467664878638!3d30.052128391437485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458170c58240c53%3A0x4f4eb67ad149f5e2!2z2YHZhtiv2YIg2KrZiNmE2YrYqCDZgdin2YXZitmE2Yog2KjYp9ix2YM!5e0!3m2!1sar!2seg!4v1684512591530!5m2!1sar!2seg";
                case "Nasr City":
                    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110313.64376053694!2d31.551995174903837!3d30.22848133829782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458175c541e1e35%3A0xc6fc336786a8e571!2z2LnYqNin2LMg2KfZhNi52YLYp9iv!5e0!3m2!1sar!2seg!4v1684512167196!5m2!1sar!2seg";
                case "Heliopolis":
                    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.0263085644483!2d31.318156523771094!3d30.093432866246705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e27b09a6045%3A0x3b1e67c611c406f9!2z2LPZitmG2YXYpyDYsdmI2YPYs9mK!5e0!3m2!1sar!2seg!4v1684512395429!5m2!1sar!2seg";
                case "Mokattam":
                    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.5634935692196!2d31.31669492377376!3d29.99197232105381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458392285976735%3A0xd7b1d0b0facd0d0c!2z2LTYp9ix2Lkg2KfZhNis2KfZhdi52Kkg2KfZhNit2K_Zitir2KnYjCDYp9mE2KPYqNin2KzZitip2Iwg2YLYs9mFINin2YTZhdmC2LfZhdiMINmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1684512460381!5m2!1sar!2seg";
                case "Giza":
                    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110647.61348368345!2d31.330170764198762!3d29.929446303873576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145837c586ab8ce1%3A0xc609e26e38e717f8!2z2LTYp9ix2Lkg2KfZhNmH2LHZhQ!5e0!3m2!1sar!2seg!4v1684512503064!5m2!1sar!2seg";
                case "The Gathering":
                    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27627.740797292216!2d31.503467664878638!3d30.052128391437485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458170c58240c53%3A0x4f4eb67ad149f5e2!2z2YHZhtiv2YIg2KrZiNmE2YrYqCDZgdin2YXZitmE2Yog2KjYp9ix2YM!5e0!3m2!1sar!2seg!4v1684512591530!5m2!1sar!2seg";
            }
        }
    });
}

$(function () {
    $(".nav-link").on("click", function () {
        $(".nav-link").removeClass("active");
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

    $('.product-option input[type="radio"]').on("change", function () {
        $(this).parents(".product-option").siblings().removeClass("active");
        $(this).parents(".product-option").addClass("active");
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
