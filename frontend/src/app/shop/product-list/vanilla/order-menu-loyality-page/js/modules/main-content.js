export default function mainContent() {
    document.addEventListener('DOMContentLoaded', function() {
        // Function to update cart count
        const updateCartCount = (amount) => {
            const cartCountSpan = document.querySelector('.order-menu__header__cart-count');
            let currentCartCount = parseInt(cartCountSpan.textContent);
            currentCartCount += amount;
            cartCountSpan.textContent = Math.max(currentCartCount, 0); // Ensure count does not go below 0
        };
    
        // Handle quantity adjustments
        const quantityContainers = document.querySelectorAll('.order-menu__product-quantity');
        quantityContainers.forEach(container => {
            const decreaseButton = container.querySelector('.order-menu__quantity-button--decrease');
            const increaseButton = container.querySelector('.order-menu__quantity-button--increase');
            const quantityInput = container.querySelector('.order-menu__quantity-input');
    
            decreaseButton.addEventListener('click', () => {
                let quantity = parseInt(quantityInput.value);
                quantity = Math.max(0, quantity - 1); // Ensure quantity does not go below 1
                quantityInput.value = quantity;
            });
    
            increaseButton.addEventListener('click', () => {
                let quantity = parseInt(quantityInput.value);
                quantity += 1;
                quantityInput.value = quantity;
            });
        });
    
        // Handle adding to cart and toggling add/delete buttons
        const addButtons = document.querySelectorAll('.order-menu__add-button');
        addButtons.forEach(button => {
            button.addEventListener('click', function() {
                const quantityInput = button.closest('.order-menu__product-quantity').querySelector('.order-menu__quantity-input');
                const productQuantity = parseInt(quantityInput.value);
                updateCartCount(productQuantity);
    
                // Toggle buttons
                button.classList.add('hidden');
                const deleteButton = button.nextElementSibling;
                deleteButton.classList.remove('hidden');
            });
        });
    
        // Handle deleting items from the cart
        const deleteButtons = document.querySelectorAll('.order-menu__delete-button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const quantityInput = button.closest('.order-menu__product-quantity').querySelector('.order-menu__quantity-input');
                const productQuantity = -parseInt(quantityInput.value); // Negative to subtract from cart
                updateCartCount(productQuantity);
    
                // Reset quantity to 1 for usability
                quantityInput.value = 1;
    
                // Toggle buttons
                button.classList.add('hidden');
                const addButton = button.previousElementSibling;
                addButton.classList.remove('hidden');
            });
        });
    });
}    