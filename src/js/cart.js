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
            alert("item added");

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
        if (confirm("Are you sure you want to this item?")) {
            var index = $(this).closest(".product").index();
            cart.splice(index, 1);
            sessionStorage.setItem("cart", JSON.stringify(cart));
            updateCartDropdown();
            alert("Item Deleted!");
        } else {
            alert("Nothing Changed!");
        }
    });

    // Function to update the cart dropdown
    function updateCartDropdown() {
        // Clear the cart dropdown
        $(".product").remove();

        // Add each product in the cart to the cart dropdown
        cart.forEach(function (product) {
            var productElement = `
                <div class="product">
                    <div class="product-name">
                        <a class="delete-item custom-btn-with-icon"><i class="fa-solid fa-trash"></i></a>
                        ${product.name} - ${product.size} - ${product.type}
                    </div>
                    <div class="product-price">${product.price}</div>
                </div>
            `;
            cartDropdown.prepend(productElement);
        });

        // Update the total price
        updateTotalPrice();
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
