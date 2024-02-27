import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-business-configuration',
  standalone: true,
  templateUrl: './business-configuration.component.html',
  styleUrl: './business-configuration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BusinessConfigurationComponent implements AfterViewInit {
  @ViewChild('menuToggle') menuToggle!: ElementRef<HTMLInputElement>;
  @ViewChild('orderToggleDiv') orderToggleDiv!: ElementRef<HTMLDivElement>;
  @ViewChild('paymentToggleDiv') paymentToggleDiv!: ElementRef<HTMLDivElement>;
  @ViewChild('addItemButtonSection') addItemButtonSection!: ElementRef<HTMLDivElement>;
  @ViewChild('floatingButtonSection') floatingButtonSection!: ElementRef<HTMLButtonElement>;

  menuStatusLabel: string = 'on';
  orderStatusLabel: string = 'off';
  paymentStatusLabel: string = 'on';

  constructor() { }

  ngAfterViewInit(): void {
    this.loadToggleStates();
    this.initializeToggles();
  }

  /**
   * Simulates saving the current states of toggle buttons.
   * Placeholder for backend API call.
   */
  saveToggleStates(): void {
    // Placeholder for saving the current state of toggles to the backend
    console.log('Saving toggle states...');
    // Make API call to the backend
  }

  /**
   * Loads and applies the saved toggle states from the backend.
   */
  loadToggleStates(): void {
    // Placeholder for loading saved toggle states from the backend
    console.log('Loading toggle states...');
    // Simulate fetching data from the backend
    // TODO: Make an API call to your backend to fetch saved states
    const fetchedStates = {
      menuEnabled: true,
      orderEnabled: false,
      paymentEnabled: true,
    };

    // Apply these states to your toggles
    this.menuToggle.nativeElement.checked = fetchedStates.menuEnabled;

    if (this.orderToggleDiv.nativeElement) {
      const orderToggleInput = this.orderToggleDiv.nativeElement.querySelector('input');
      if (orderToggleInput) {
        orderToggleInput.checked = fetchedStates.orderEnabled;
      }
    }

    if (this.paymentToggleDiv.nativeElement) {
      const paymentToggleInput = this.paymentToggleDiv.nativeElement.querySelector('input');
      if (paymentToggleInput) {
        paymentToggleInput.checked = fetchedStates.paymentEnabled;
      }
    }

    // Update the UI based on these states
    this.updateToggleLabels();
    this.updateSliderAppearance();
    this.updateFloatingButtonVisibility();

    // Initialize the toggles based on the menu setting
    this.initializeToggles();
  }

  initializeToggles(): void {
    // Initial state update
    this.updateSliderAppearance();

    console.log("menuToggle.nativeElement.checked: ", this.menuToggle.nativeElement.checked);

    if (this.menuToggle && this.menuToggle.nativeElement.checked) {
      this.orderToggleDiv.nativeElement.classList.remove('hidden');
      this.paymentToggleDiv.nativeElement.classList.remove('hidden');
    } else {
      this.orderToggleDiv.nativeElement.classList.add('hidden');
      this.paymentToggleDiv.nativeElement.classList.add('hidden');
    }
  }

  updateToggleStates(): void {
    // Handle the toggle logic for the menu checkbox
    if (this.menuToggle.nativeElement.checked) {
      // Show elements related to menu
      this.orderToggleDiv.nativeElement.classList.remove('hidden');
      this.paymentToggleDiv.nativeElement.classList.remove('hidden');
    } else {
      // Hide elements related to menu
      this.orderToggleDiv.nativeElement.classList.add('hidden');
      this.paymentToggleDiv.nativeElement.classList.add('hidden');
    }
  }

  /**
   * Updates the visibility of the floating add item button based on the menu toggle state.
   */
  updateFloatingButtonVisibility(): void {
    if (this.menuToggle.nativeElement.checked) {
      this.floatingButtonSection.nativeElement.classList.remove('hidden');
    } else {
      this.floatingButtonSection.nativeElement.classList.add('hidden');
    }
  }

  /**
   * Updates the labels next to toggles to reflect their current state off/on.
   */
  updateToggleLabels(): void {
    // Update label content based on checkbox state
    if (this.menuToggle && this.orderToggleDiv && this.paymentToggleDiv) {
      // Update menu toggle label
      this.menuStatusLabel = this.menuToggle.nativeElement.checked ? 'on' : 'off';

      // Update order toggle label
      const orderToggleInput = this.orderToggleDiv.nativeElement.querySelector('input');
      this.orderStatusLabel = orderToggleInput ? (orderToggleInput.checked ? 'on' : 'off') : '';

      // Update payment toggle label
      const paymentToggleInput = this.paymentToggleDiv.nativeElement.querySelector('input');
      this.paymentStatusLabel = paymentToggleInput ? (paymentToggleInput.checked ? 'on' : 'off') : '';
    }
  }

  /**
   * Updates the appearance of sliders to reflect their state.
   */
  updateSliderAppearance(): void {
    const toggles = document.querySelectorAll('.menu-settings__toggle input');

    toggles.forEach((toggle) => {
      if (toggle instanceof HTMLInputElement) {
        const slider = toggle.nextElementSibling as HTMLElement; // Accurately select the slider span related to each toggle

        if (slider) {
          if (toggle.checked) {
            slider.classList.remove('menu-settings__slider--off');
          } else {
            slider.classList.add('menu-settings__slider--off');
          }
        }
      }
    });
  }

  /**
   * Utility function for toggle maangement.
   */
  onToggleChange(toggleId: string): void {
    if (toggleId === 'menu-toggle') {
      this.initializeToggles();
      this.updateFloatingButtonVisibility();
    }
    this.updateSliderAppearance();
    this.updateToggleLabels();
    this.saveToggleStates();
  }
}

// // Updates the appearance of sliders to reflect their state.
// private updateSliderAppearance(): void {
//   const toggles = document.querySelectorAll('.menu-settings__toggle input');

//   toggles.forEach(toggle => {
//     const slider = toggle.nextElementSibling; // Accurately select the slider span related to each toggle
//     const sliderCircle = slider.querySelector('.menu-settings__slider:before'); // Assuming you want to target the pseudo-element (note: pseudo-elements cannot be directly manipulated via JS like this)

//     if (toggle.checked) {
//       slider.classList.remove('menu-settings__slider--off');
//     } else {
//       slider.classList.add('menu-settings__slider--off');
//       // If you have a specific class to indicate the "off" state that affects the appearance, toggle it here
//     }
//   });
// }

// import { CommonModule } from '@angular/common';
// import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-business-configuration',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './business-configuration.component.html',
//   styleUrl: './business-configuration.component.scss',
//   changeDetection: ChangeDetectionStrategy.OnPush
// })

// export class BusinessConfigurationComponent implements OnInit {
//   @ViewChild('menuToggleDiv') menuToggleDiv!: ElementRef;
//   @ViewChild('orderToggleDiv') orderToggleDiv!: ElementRef;
//   @ViewChild('paymentToggleDiv') paymentToggleDiv!: ElementRef;
//   @ViewChild('addItemButtonSection') addItemButtonSection!: ElementRef;
//   @ViewChild('floatingButtonSection') floatingButtonSection!: ElementRef;
//   @ViewChild('menuStatusLabel') menuStatusLabel!: ElementRef;
//   @ViewChild('orderStatusLabel') orderStatusLabel!: ElementRef;
//   @ViewChild('paymentStatusLabel') paymentStatusLabel!: ElementRef;

//   @ViewChild('itemsDisplayArea') itemsDisplayArea!: ElementRef;
//   @ViewChild('addItemModal') addItemModal!: ElementRef;

//   businessProductsForm!: FormGroup;

//   menuEnabled: boolean = true;
//   orderEnabled: boolean = false;
//   paymentEnabled: boolean = true;

//   previewImageSrc: string | undefined;
//   isPreviewImageVisible: boolean = false;

//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit(): void {
//     this.businessProductsForm = this.formBuilder.group({
//       itemName: [''],
//       itemPrice: [''],
//       prepTime: [''],
//       description: [''],
//     });

//     this.loadToggleStates(); // Load toggle states on initialization
//     this.loadItems(); // Load items on initialization
//   }

//   /**
//    * Simulates saving the current states of toggle buttons.
//    * Placeholder for backend API call.
//    */
//   saveToggleStates(): void {
//     // Placeholder for saving the current state of toggles to the backend
//     console.log('Saving toggle states...');
//     // Make API call to the backend
//   }

//   /**
//    * Loads and applies the saved toggle states from the backend.
//    */
//   loadToggleStates(): void {
//     // Placeholder for loading saved toggle states from the backend
//     console.log('Loading toggle states...');
//     // Simulate fetching data from the backend
//     // TODO: Make an API call to your backend to fetch saved states

//     // Update the UI based on these states
//     this.updateToggleLabels();
//     this.updateSliderAppearance();
//     this.updateFloatingButtonVisibility();

//     // Initialize the toggles based on the menu setting
//     this.initializeToggles();
//   }

//   initializeToggles(): void {
//     // Initial state update
//     this.updateSliderAppearance();

//     const menuEnabled = this.menuEnabled;

//     if (this.orderToggleDiv && this.paymentToggleDiv && this.addItemButtonSection) {
//       if (menuEnabled) {
//         this.orderToggleDiv.nativeElement.classList.remove('hidden');
//         this.paymentToggleDiv.nativeElement.classList.remove('hidden');
//         this.addItemButtonSection.nativeElement.classList.remove('hidden');
//       } else {
//         this.orderToggleDiv.nativeElement.classList.add('hidden');
//         this.paymentToggleDiv.nativeElement.classList.add('hidden');
//         this.addItemButtonSection.nativeElement.classList.add('hidden');
//       }
//     }
//   }

//   /**
//     * Updates the visibility of the floating add item button based on the menu toggle state.
//     */
//   updateFloatingButtonVisibility(): void {
//     const menuEnabled = this.menuEnabled;

//     if (this.floatingButtonSection) {
//       if (menuEnabled) {
//         this.floatingButtonSection.nativeElement.classList.remove('hidden');
//       } else {
//         this.floatingButtonSection.nativeElement.classList.add('hidden');
//       }
//     }
//   }

//   /**
//    * Updates the labels next to toggles to reflect their current state off/on.
//    */
//   updateToggleLabels(): void {
//     const menuEnabled = this.menuEnabled;
//     const orderEnabled = this.orderEnabled;
//     const paymentEnabled = this.paymentEnabled;

//     if (this.menuStatusLabel && this.orderStatusLabel && this.paymentStatusLabel) {
//       this.menuStatusLabel.nativeElement.textContent = menuEnabled ? 'on' : 'off';
//       this.orderStatusLabel.nativeElement.textContent = orderEnabled ? 'on' : 'off';
//       this.paymentStatusLabel.nativeElement.textContent = paymentEnabled ? 'on' : 'off';
//     }
//   }

// /**
//  * Updates the appearance of sliders to reflect their state.
//  */
// updateSliderAppearance(): void {
//   const toggles = document.querySelectorAll('.menu-settings__toggle input');

//   toggles.forEach((toggle) => {
//     if (toggle instanceof HTMLInputElement) {
//       const slider = toggle.nextElementSibling as HTMLElement; // Accurately select the slider span related to each toggle

//       if (slider) {
//         if (toggle.checked) {
//           slider.classList.remove('menu-settings__slider--off');
//         } else {
//           slider.classList.add('menu-settings__slider--off');
//         }
//       }
//     }
//   });
// }

//   onToggleChange(toggleId: string): void {
//     if (toggleId === 'menu-toggle') {
//       this.updateFloatingButtonVisibility();
//     }
//     this.updateSliderAppearance();
//     this.updateToggleLabels();
//     this.saveToggleStates();
//   }

//   showModal(): void {
//     const modal = this.addItemModal.nativeElement as HTMLElement;
//     modal.style.display = 'block';
//   }

//   hideModal(event: Event): void {
//     event.preventDefault();
//     const modal = this.addItemModal.nativeElement as HTMLElement;
//     modal.style.display = 'none';
//   }

//   // Function to handle image file selection and display a preview
//   handleImageUpload(event: any): void {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       this.previewImageSrc = reader.result as string;
//       this.isPreviewImageVisible = true;
//     };
//     reader.readAsDataURL(file);
//   }

//   // Function to save items to localStorage
//   saveItems(items: any[]): void {
//     localStorage.setItem('items', JSON.stringify(items));
//   }

//   // Function to load items from localStorage and display them
//   loadItems(): void {
//     const storedItems = localStorage.getItem('items');
//     if (storedItems) {
//       const items = JSON.parse(storedItems) || [];
//       const itemsDisplayArea = this.itemsDisplayArea.nativeElement;
//       itemsDisplayArea.innerHTML = ''; // Clear previous content
//       items.forEach((item: any) => {
//         this.addItemToDisplayArea(item);
//       });
//     }
//     this.adjustFloatingButtonPosition();
//   }

//   // Function to delete an item
//   deleteItem(itemId: string): void {
//     const storedItems = localStorage.getItem('items');
//     if (storedItems) {
//       const items = JSON.parse(storedItems) || [];
//       const updatedItems = items.filter((item: { id: string; }) => item.id !== itemId);
//       localStorage.setItem('items', JSON.stringify(updatedItems));
//       this.loadItems(); // Reload items to update the display
//     }
//     this.adjustFloatingButtonPosition();
//   }

//   // Function to add an item to the display area
//   addItemToDisplayArea(item: any): void {
//     const itemsDisplayArea = this.itemsDisplayArea.nativeElement;
//     const itemElement = document.createElement('div');
//     itemElement.classList.add('item');
//     itemElement.setAttribute('data-id', item.id);
//     itemElement.innerHTML = `
//         <img src="${item.imagePreview}" alt="${item.itemName}" style="width: 60px; height: auto;">
//         <div class="item-text">
//             <h3>${item.itemName}</h3>
//             <p>${item.itemDescription}</p>
//             <button class="delete-item-btn" (click)="deleteItem(item.id)" data-id="${item.id}">Delete</button>
//         </div>`;
//     itemsDisplayArea.appendChild(itemElement);
//   }

//   // Function to adjust the floating button's position based on the items display area's height
//   adjustFloatingButtonPosition(): void {
//     const floatingButton = this.floatingButtonSection.nativeElement;
//     const itemsDisplayArea = this.itemsDisplayArea.nativeElement;
//     const displayAreaBottom = itemsDisplayArea.getBoundingClientRect().bottom;
//     const viewportHeight = window.innerHeight;
//     let newBottomPosition = viewportHeight - displayAreaBottom + -700; // Add a 20px offset from the bottom of the items display area

//     floatingButton.style.bottom = `${newBottomPosition}px`;
//   }

//   clearPreviewImage(): void {
//     this.previewImageSrc = undefined;
//     this.isPreviewImageVisible = false;
//   }

//   onModalConfirm(): void {
//     const newItem = this.businessProductsForm.value;
//     newItem.imagePreview = this.previewImageSrc;
//     newItem.id = Date.now().toString();

//     this.addItemToDisplayArea(newItem);

//     const storedItems = localStorage.getItem('items');
//     if (storedItems) {
//       const items = JSON.parse(storedItems) || [];
//       items.push(newItem);
//       this.saveItems(items);
//       this.businessProductsForm.reset();
//       this.previewImageSrc = '';
//       this.hideModal(new Event('click')); // Simulate click event to hide modal
//     }
//     this.adjustFloatingButtonPosition();
//   }
// }
