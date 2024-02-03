import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { LoyaltyProgramComponent } from './loyalty-program/loyalty-program.component';
import { BusinessPhotosComponent } from './business-photos/business-photos.component';
import { QrCodeComponent } from './qr-code/qr-code.component';

@Component({
  selector: 'app-business-settings',
  standalone: true,
  imports: [ProductsComponent, LoyaltyProgramComponent, BusinessPhotosComponent, QrCodeComponent],
  templateUrl: './business-settings.component.html',
  styleUrl: './business-settings.component.scss',
})
export class BusinessSettingsComponent {}
