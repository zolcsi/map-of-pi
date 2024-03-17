import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  stampsNeeded?: number;
  itemName?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router // Inject the Router service
  ) {}

  ngOnInit(): void {
    // Retrieve the current navigation from the Router service
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { stampsNeeded: number; itemName: string };

    if (state) {
      this.stampsNeeded = state.stampsNeeded;
      this.itemName = state.itemName;
    }
  }

  onEdit() {
    // Implement the edit logic or navigation
  }

  onConfirm() {
    // Implement the confirm logic or navigation
  }
}

