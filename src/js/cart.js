const pizzaCards = document.querySelectorAll(".card");
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
                dataPrice.setAttribute("data-price", updatedPrice + "$");
            }
        });
    });
});

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
        });

        // Update the total price
        updateTotalPrice();

        // Update the item count
        updateItemCount();
    }

    // Function to update the item count display
    function updateItemCount() {
        document.querySelector(".counter").textContent = cart.length;
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
    }

    // Update the cart dropdown when the page loads
    updateCartDropdown();
});
