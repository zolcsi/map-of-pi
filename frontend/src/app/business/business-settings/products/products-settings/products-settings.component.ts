import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-products-settings',
  standalone: true,
  imports: [],
  templateUrl: './products-settings.component.html',
  styleUrl: './products-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsSettingsComponent {}
