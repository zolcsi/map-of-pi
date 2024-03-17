import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loyalty-program',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './loyalty-program.component.html',
  styleUrls: ['./loyalty-program.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoyaltyProgramComponent {
  // Create a form group for the loyalty program form
  loyaltyForm = new FormGroup({
    isActive: new FormControl(false), // For toggle switch
    stampsNeeded: new FormControl('', Validators.required), // Input for stamps needed
    freeItemName: new FormControl('', Validators.required), // Input for the name of the free item
    numberOfFreeItems: new FormControl(1, Validators.required) // Input for the number of free items
  });

  constructor(private router: Router) {}

  saveSettings() {
    if (this.loyaltyForm.valid) {
      // Prepare the state object with form values
      const navigationExtras = {
        state: {
          stampsNeeded: this.loyaltyForm.value.stampsNeeded,
          itemName: this.loyaltyForm.value.freeItemName,
          // Include any other data you need to pass to the confirmation screen
        }
      };
  
      // Navigate to the confirmation page with the state object
      this.router.navigate(['/business/stamps-confirmation'], navigationExtras);
    } else {
      console.log('Form is not valid.');
      // Handle the invalid form case here
    }
  }
}  