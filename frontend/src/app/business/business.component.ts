import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BusinessSettingsComponent } from './business-settings/business-settings.component';
import { OrdersComponent } from './orders/orders.component';
import { LoyaltyScanComponent } from './loyalty-scan/loyalty-scan.component';
import { UiStateService } from '../core/service/ui-state.service';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [BusinessSettingsComponent, OrdersComponent, LoyaltyScanComponent],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessComponent {

  constructor(private readonly uiStateService: UiStateService) {
    this.uiStateService.setShowBackButton(true);
  }
}
