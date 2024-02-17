import { Routes } from '@angular/router';
import { ShopComponent } from './shop.component';

export const SHOP_ROUTES: Routes = [
  {
    path: '',
    component: ShopComponent,
  },
  {
    path: 'product-list',
    loadComponent: () => import('./product-list/product-list.component').then((m) => m.ProductListComponent),
  },
  {
    path: 'loyalty-info',
    loadComponent: () => import('./loyalty-info/loyalty-info.component').then((m) => m.LoyaltyInfoComponent),
  },
  {
    path: 'shop-info',
    loadComponent: () => import('./shop-info/shop-info.component').then((m) => m.ShopInfoComponent),
  },
  {
    path: 'shopping-cart',
    loadComponent: () => import('./shopping-cart/shopping-cart.component').then((m) => m.ShoppingCartComponent),
  },
  {
    path: 'transactions',
    loadComponent: () => import('./transactions/transactions.component').then((m) => m.TransactionsComponent),
  },
];
