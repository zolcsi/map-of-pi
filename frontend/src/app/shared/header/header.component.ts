import { ChangeDetectionStrategy, Component, Signal, ViewChild } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { DarkModeTogglerService } from '../dark-mode-toggler/dark-mode-toggler.service';
import { DarkModeTogglerComponent } from '../dark-mode-toggler/dark-mode-toggler.component';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { UiStateService } from '../../core/service/ui-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, DarkModeTogglerComponent, LanguageSwitcherComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @ViewChild(DarkModeTogglerComponent) darkModeToggler!: DarkModeTogglerComponent;
  showBackButton: Signal<boolean>;

  constructor(
    private readonly location: Location,
    private readonly uiStateService: UiStateService,
    public readonly darkModeTogglerService: DarkModeTogglerService
  ) {
    this.showBackButton = this.uiStateService.showBackButton;
  }

  navigateBack(): void {
    this.location.back();
  }
}
