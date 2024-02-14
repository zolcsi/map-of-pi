import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  standalone: true,
  template: `
    <header class="wallet-header">
        <button class="wallet-header__back-button" aria-label="Go back">
          <i class="fa-solid fa-arrow-left-long"></i>
        </button>
        <div class="wallet-header__center-group">
          <button class="wallet-header__wallet-button" aria-label="Open wallet">
            <img src="../../../assets/images/Pi-wallet.png" alt="Wallet">
          </button>
          <h1 class="wallet-header__title">Wallet</h1>
          <img src="../../../assets/images/Pi_logo.png" alt="Logo" class="wallet-header__logo" />
        </div>
        <button class="wallet-header__dropdown-button" aria-label="Open menu">
          <i class="fa-solid fa-chevron-down"></i>
        </button>
    </header>

    <main class="payment">
        <section class="payment__info">
            <div class="payment__header">
               <h1 class="payment__business-name">Business name</h1>
               <span class="payment__action">requests</span>
            </div>
            <p class="payment__amount">1.0 π</p>
            <p class="payment__fee">Transaction Fee: 0.01 π</p>
        </section>

        <section class="payment__recipient">
            <h2 class="recipient__label">Recipient Address</h2>
            <p class="recipient__address">GCGQ2...WT643</p>
        </section>

        <section class="payment__memo">
            <h2 class="memo__label">Memo:</h2>
            <p class="memo__text">Buying 100 tokens on <br> Business name</p>
        </section>

        <section class="payment__actions">
            <button class="actions__button actions__button--pay">Pay with π</button>
            <button class="actions__button actions__button--cancel">Cancel</button>
        </section>
    </main>
  `,
  styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initializeEventListeners();
  }

  /**
   * Sets up event listeners for header & transaction actions.
   */
  initializeEventListeners() {
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
