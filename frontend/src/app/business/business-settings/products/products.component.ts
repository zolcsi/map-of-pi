import { Component } from '@angular/core';
import { ProductsSettingsComponent } from './products-settings/products-settings.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsSettingsComponent, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {}
