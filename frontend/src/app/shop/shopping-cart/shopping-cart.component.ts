import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})

export class ShoppingCartComponent implements OnInit {
  ngOnInit(): void {
    this.setupOrderButton();
  }

  /**
   * Sets up the event listener for the order button.
   */
  setupOrderButton() {
    const orderButton = document.querySelector('.cart-content__order-button');
    if (orderButton) {
      orderButton.addEventListener('click', () => this.handleOrderButtonClick());
    }
  }

  /**
   * Handles the click event on the order button.
   * This should trigger the preparation of data for the backend and send it accordingly.
   */
  handleOrderButtonClick() {
    // Collects the necessary data from the cart
    // For example, the dish name, quantity, total price, etc.
    const businessNameElement = document.querySelector('.cart-content__business-name');
    const dishNameElement = document.querySelector('.cart-content__description');
    const totalPriceElement = document.querySelector('.cart-content__total-value');

    if (businessNameElement && dishNameElement && totalPriceElement) {
      const orderDetails = {
        businessName: businessNameElement.textContent,
        dishName: dishNameElement.textContent,
        totalPrice: totalPriceElement.textContent,
      };

      // API endpoint to submit the order
      this.submitOrder(orderDetails);
    } else {
      console.error('One or more required elements not found in the DOM.');
    }
  }

  /**
   * Submits the order details to the backend.
   * @param {Object} orderDetails - The details of the order to submit.
   */
  submitOrder(orderDetails: { businessName: string | null; dishName: string | null; totalPrice: string | null; }) {
    console.log('Order details to submit:', orderDetails);

    // TODO: make an HTTP request to submit the orderDetails to the backend.
  }
}
