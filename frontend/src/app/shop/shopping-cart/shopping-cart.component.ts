import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartComponent {}
