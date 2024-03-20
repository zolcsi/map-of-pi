import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
})
export class ConfirmationComponent {
  isActive = false;
  stampsNeeded?: number;
  itemName?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router 
  ) {}


  toggleLoyaltyCard(): void {
    this.isActive = !this.isActive; // This toggles the state of isActive
  }

  onEdit() {
    // Implement the edit logic or navigation
  }

  onConfirm() {
    // Implement the confirm logic or navigation
  }
}