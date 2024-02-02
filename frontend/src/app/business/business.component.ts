import { Component } from '@angular/core';
import { BusinessSettingsComponent } from './business-settings/business-settings.component';
import { OrdersComponent } from './orders/orders.component';
import { LoyaltyScanComponent } from './loyalty-scan/loyalty-scan.component';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [BusinessSettingsComponent, OrdersComponent, LoyaltyScanComponent],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss',
})
export class BusinessComponent {}
