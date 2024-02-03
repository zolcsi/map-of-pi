import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { UiStateService } from '../../core/service/ui-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, LanguageSwitcherComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  showBackButton: Signal<boolean>;

  constructor(
    private readonly location: Location,
    private readonly uiStateService: UiStateService,
  ) {
    this.showBackButton = this.uiStateService.showBackButton;
  }

  navigateBack(): void {
    this.location.back();
  }
}
