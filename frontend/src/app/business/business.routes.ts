import { Routes } from '@angular/router';
import { BusinessComponent } from './business.component';

export const BUSINESS_ROUTES: Routes = [
  {
    path: '',
    component: BusinessComponent,
  },
  {
    path: 'orders',
    loadComponent: () => import('./orders/orders.component').then((m) => m.OrdersComponent),
  },
  {
    path: 'loyalty-scan',
    loadComponent: () => import('./loyalty-scan/loyalty-scan.component').then((m) => m.LoyaltyScanComponent),
  },
  {
    path: 'business-settings',
    loadChildren: () => import('./business-settings/business-settings.routes').then((m) => m.BUSINESS_SETTINGS_ROUTES),
  },
];
