import { Routes } from '@angular/router';
import { BusinessSettingsComponent } from './business-settings.component';

export const BUSINESS_SETTINGS_ROUTES: Routes = [
  {
    path: '',
    component: BusinessSettingsComponent,
  },
  {
    path: 'business-photos',
    loadComponent: () => import('./business-photos/business-photos.component').then((m) => m.BusinessPhotosComponent),
  },
  {
    path: 'loyalty-program',
    loadComponent: () => import('./loyalty-program/loyalty-program.component').then((m) => m.LoyaltyProgramComponent),
  },
  {
    path: 'products',
    loadComponent: () => import('./products/products.component').then((m) => m.ProductsComponent),
  },
  {
    path: 'qr-code',
    loadComponent: () => import('./qr-code/qr-code.component').then((m) => m.QrCodeComponent),
  },
];
