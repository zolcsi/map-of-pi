import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  standalone: true,
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  ngOnInit(): void {
    this.setupBackButton();
    this.setupWalletButton();
    this.setupDropdownButton();
    this.setupPayButton();
    this.setupCancelPurchaseButton();
  }

  /**
   * Attaches an event listener to the back button.
   */
  setupBackButton() {
    const backButton = document.querySelector('.wallet-header__back-button');
    if (backButton) {
      backButton.addEventListener('click', () => {
        // Back navigation logic goes here.
        history.back();
        console.log('Back button logic goes here');
      });
    }
  }

  /**
   * Attaches an event listener to the wallet button.
   */
  setupWalletButton() {
    const walletButton = document.querySelector('.wallet-header__wallet-button');
    if (walletButton) {
      walletButton.addEventListener('click', () => {
        // Insert logic to open the wallet here.
        console.log('Open wallet logic goes here');
      });
    }
  }

  /**
   * Attaches an event listener to the dropdown button.
   */
  setupDropdownButton() {
    const dropdownButton = document.querySelector('.wallet-header__dropdown-button');
    if (dropdownButton) {
      dropdownButton.addEventListener('click', () => {
        // Insert logic to toggle the dropdown menu here.
        console.log('Dropdown logic goes here');
      });
    }
  }

  /**
   * Attaches an event listener to the pay with Pi button.
   */
  setupPayButton() {
    const payButton = document.querySelector('.actions__button--pay');
    if (payButton) {
      payButton.addEventListener('click', () => {
        // Purchase with Pi logic goes here.
        history.back();
        console.log('Pay with Pi logic goes here');
      });
    }
  }

  /**
   * Attaches an event listener to the cancel purchase button.
   */
  setupCancelPurchaseButton() {
    const cancelButton = document.querySelector('.actions__button--cancel');
    if (cancelButton) {
      cancelButton.addEventListener('click', () => {
        // Insert logic to cancel purchase button here.
        console.log('cancel purchase logic goes here');
      });
    }
  }
}
