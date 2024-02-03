import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductsSettingsComponent } from './products-settings/products-settings.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsSettingsComponent, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {}
