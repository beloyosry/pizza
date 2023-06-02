if ($(".cart-list")) {
    const pizzaCards = document.querySelectorAll(".card");
    if (pizzaCards) {
        pizzaCards.forEach((card) => {
            const size = card.querySelectorAll("input[name='pizza-size']");
            const price = card.querySelector(".price");
            const dataPrice = card.querySelector("[data-price]");

            let initialPrice = 0;
            if (dataPrice) {
                initialPrice = parseInt(
                    dataPrice.getAttribute("data-price").replace("$", "")
                );
            }

            size.forEach((element) => {
                element.addEventListener("change", function () {
                    let updatedPrice = initialPrice; // Initialize with the initial price
                    if (this.value === "Medium") {
                        updatedPrice += 10; // Add 10 for medium size
                    } else if (this.value === "Large") {
                        updatedPrice += 25; // Add 25 for large size
                    }
                    price.innerHTML = updatedPrice + "$";
                    if (dataPrice) {
                        dataPrice.setAttribute(
                            "data-price",
                            updatedPrice + "$"
                        );
                    }
                });
            });
        });
    }

    const toastQuestion = `
<div class="toast toast-question" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-body">
            Are you sure you want to delete this item?
            <div class="mt-2 pt-2 border-top">
                <button type="button" class="btn btn-primary btn-sm confirm-btn">Delete</button>
                <button type="button" class="btn btn-secondary btn-sm cancel-btn" data-bs-dismiss="toast">Close</button>
            </div>
        </div>
    </div>
`;

    const toastRegularDeleted = `
<div class="toast toast-regular-deleted align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
            <div class="toast-body">
                Item Deleted!
            </div>
            <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
`;

    const toastRegularCancel = `
<div class="toast toast-regular-cancel align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
            <div class="toast-body">
                Nothing Changed!
            </div>
            <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
`;

    const toastRegularAdded = `
<div class="toast toast-regular-added align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
            <div class="toast-body">
                Item Added
            </div>
            <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
`;

    function toastMsg(toastType) {
        var toast = document.createElement("div");
        toast.innerHTML = toastType;
        document.body.prepend(toast);
        setTimeout(() => {
            toast.remove();
        }, 2500);
    }

    $(function () {
        // Load the cart data from sessionStorage
        var cart = JSON.parse(sessionStorage.getItem("cart")) || [];

        // Add event listener to add pizzas to the cart
        var addBtns = document.querySelectorAll(".add-to-cart-btn");
        var cartDropdown = $(".cart-dropdown");

        addBtns.forEach(function (addBtn) {
            addBtn.addEventListener("click", function (event) {
                event.preventDefault();

                // Get the pizza data from the data attributes and radio inputs
                var pizzaName = this.getAttribute("data-name");
                var pizzaSizeInput = this.closest(".pizza").querySelector(
                    "input[name='pizza-size']:checked"
                );
                var pizzaTypeInput = this.closest(".pizza").querySelector(
                    "input[name='pizza-type']:checked"
                );
                var pizzaPrice = this.getAttribute("data-price");

                // Check if the size and type of the pizza have been selected
                if (!pizzaSizeInput || !pizzaTypeInput) {
                    alert(
                        "Please choose the size and type of the pizza before adding it to the cart."
                    );
                    return;
                }
                toastMsg(toastRegularAdded);
                $(".toast-regular-added").toast("show");
                setTimeout(() => {
                    $(".toast-regular-added").toast("hide");
                }, 2000);

                var pizzaSize = pizzaSizeInput.value;
                var pizzaType = pizzaTypeInput.value;

                // Create a new product object with the pizza data
                var product = {
                    name: pizzaName,
                    size: pizzaSize,
                    type: pizzaType,
                    price: pizzaPrice,
                };

                // Add the new product object to the cart array
                cart.push(product);

                // Save the cart data to sessionStorage
                sessionStorage.setItem("cart", JSON.stringify(cart));

                // Update the cart dropdown
                updateCartDropdown();
            });
        });
        var totalPriceElement = $(".total-price");

        // Add event listener to delete items from the cart using event delegation
        $(document).on("click", ".delete-item", function () {
            toastMsg(toastQuestion);
            $(".toast-question").toast("show");
        });

        $(document).on("click", ".confirm-btn", function () {
            var index = $(this).closest(".product").data("index");
            cart.splice(index, 1);
            sessionStorage.setItem("cart", JSON.stringify(cart));
            updateCartDropdown();
            $(".toast-question").toast("hide");
            toastMsg(toastRegularDeleted);
            $(".toast-regular-deleted").toast("show");
            setTimeout(() => {
                $(".toast-regular-deleted").toast("hide");
            }, 2000);
        });

        $(document).on("click", ".cancel-btn", function () {
            $(".toast-question").toast("hide");
            toastMsg(toastRegularCancel);
            $(".toast-regular-cancel").toast("show");
            setTimeout(() => {
                $(".toast-regular-cancel").toast("hide");
            }, 2000);
        });

        // Function to update the cart dropdown
        function updateCartDropdown() {
            // Clear the cart dropdown
            $(".product").remove();
            $(".cart-list tbody tr").remove();

            // Add each product in the cart to the cart dropdown
            cart.forEach(function (product, index) {
                var productElement = document.createElement("div");
                productElement.classList.add("product");
                productElement.innerHTML = `
                <div class="product-name">
                    <a class="delete-item custom-btn-with-icon"><i class="fa-solid fa-trash"></i></a>
                    ${product.name} - ${product.size} - ${product.type}
                </div>
                <div class="product-price">${product.price}</div>
            `;
                // Set the data-index attribute to the current index
                productElement.setAttribute("data-index", index);
                cartDropdown.append(productElement);
                var productRow = document.createElement("tr");
                productRow.innerHTML = `
            <td>${product.name}</td>
            <td>${product.size}</td>
            <td>${product.type}</td>
            <td>${product.price}</td>
        `;
                $(".cart-list tbody").append(productRow);
            });

            // Update the total price
            updateTotalPrice();

            // Update the item count
            updateItemCount();
        }

        // Function to update the item count display
        function updateItemCount() {
            var counter = document.querySelector(".counter");
            if (counter) {
                counter.textContent = cart.length;
            }
        }

        // Function to calculate and update the total price
        function updateTotalPrice() {
            var totalPrice = 0;

            // Calculate the total price from the cart data
            cart.forEach(function (product) {
                totalPrice += parseFloat(product.price.replace("$", ""));
            });

            // Update the total price element with the calculated total price
            totalPriceElement.text("$" + totalPrice.toFixed(2));

            // Update the total price in the cart table
            $(".cart-list .total-price").text("$" + totalPrice.toFixed(2));
        }

        // Update the cart dropdown when the page loads
        updateCartDropdown();
        var checkOut = null;

        if ($(".credit")) {
            $("#card-form").on("submit", function () {
                (() => {
                    "use strict";

                    // Fetch all the forms we want to apply custom Bootstrap validation styles to
                    const forms =
                        document.querySelectorAll(".needs-validation");

                    // Loop over them and prevent submission
                    Array.from(forms).forEach((form) => {
                        form.addEventListener(
                            "submit",
                            (event) => {
                                if (!form.checkValidity()) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    console.log(checkOut);
                                } else {
                                    form.classList.add("was-validated");
                                    checkOut = 1;
                                    console.log(checkOut);
                                    alert("credit card added successfully");
                                    event.preventDefault();
                                }
                            },
                            false
                        );
                    });
                })();
            });
        }
        $("#checkout").on("click", function (event) {
            if (checkOut != null) {
                var index = $(this).closest(".product").data("index");
                cart.splice(index);
                sessionStorage.setItem("cart", JSON.stringify(cart));
                updateCartDropdown();
                alert("Thank you for purchasing.");
                console.log(checkOut);
                checkOut = null;
                location.reload();
            } else {
                alert("add a credit card first!");
                event.preventDefault();
                console.log(checkOut);
            }
        });
    });

    // Credit Card
    const card = document.querySelector("#card"),
        btnOpenForm = document.querySelector("#btn-open-form"),
        form = document.querySelector("#card-form"),
        cardNumber = document.querySelector("#card .number"),
        cardName = document.querySelector("#card .name"),
        brandLogo = document.querySelector("#brand-logo"),
        signature = document.querySelector("#card .signature p"),
        monthExpDate = document.querySelector("#card .month"),
        yearExpDate = document.querySelector("#card .year");
    ccv = document.querySelector("#card .ccv");

    if (card) {
        // * Flip the card to show the front and vice versa.
        const flipCard = () => {
            if (card.classList.contains("active")) {
                card.classList.remove("active");
            }
        };

        // * Card rotation
        card.addEventListener("click", () => {
            card.classList.toggle("active");
        });

        // * Button to open the form
        btnOpenForm.addEventListener("click", () => {
            btnOpenForm.classList.toggle("active");
            form.classList.toggle("active");
        });

        // * Select month dinamically.
        for (let i = 1; i <= 12; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.innerText = i;
            form.selectMonth.appendChild(option);
        }

        // * Select year dinamically.
        const currentYear = new Date().getFullYear();
        for (let i = currentYear; i <= currentYear + 8; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.innerText = i;
            form.selectYear.appendChild(option);
        }

        form.inputNumber.addEventListener("keyup", (e) => {
            let inputValue = e.target.value;

            form.inputNumber.value = inputValue
                // Reject Spaces
                .replace(/\s/g, "")
                // Reject letters
                .replace(/\D/g, "")
                // Place an space each four numbers
                .replace(/([0-9]{4})/g, "$1 ")
                // Delete the last space
                .trim();

            cardNumber.textContent = inputValue;

            if (inputValue == "") {
                cardNumber.textContent = "#### #### #### ####";

                brandLogo.innerHTML = "";
            }

            if (inputValue[0] == 4) {
                brandLogo.innerHTML = "";
                const image = document.createElement("img");
                image.src =
                    "https://raw.githubusercontent.com/falconmasters/formulario-tarjeta-credito-3d/master/img/logos/visa.png";
                brandLogo.appendChild(image);
            } else if (inputValue[0] == 5) {
                brandLogo.innerHTML = "";
                const image = document.createElement("img");
                image.src =
                    "https://raw.githubusercontent.com/falconmasters/formulario-tarjeta-credito-3d/master/img/logos/mastercard.png";
                brandLogo.appendChild(image);
            }

            // Card is flipped to the front to be shown to the user
            flipCard();
        });

        // * Input Card Holder's Name
        form.inputHolder.addEventListener("keyup", (e) => {
            let inputValue = e.target.value;

            form.inputHolder.value = inputValue.replace(/[0-9]/g, "");
            cardName.textContent = inputValue;
            signature.textContent = inputValue;

            if (inputValue == "") {
                cardName.textContent = "Jhon Doe";
            }

            flipCard();
        });

        // * Select Month
        form.selectMonth.addEventListener("change", (e) => {
            monthExpDate.textContent = e.target.value;
            flipCard();
        });

        // * Select Year
        form.selectYear.addEventListener("change", (e) => {
            yearExpDate.textContent = e.target.value.slice(2);
            flipCard();
        });

        // * CCV
        form.inputCCV.addEventListener("keyup", () => {
            if (!card.classList.contains("active")) {
                card.classList.toggle("active");
            }

            form.inputCCV.value = form.inputCCV.value
                // Reject Spaces
                .replace(/\s/g, "")
                // Reject letters
                .replace(/\D/g, "");

            ccv.textContent = form.inputCCV.value;
        });
    }
}
