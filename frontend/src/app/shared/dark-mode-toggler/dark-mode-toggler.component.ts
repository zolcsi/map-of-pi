import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DarkModeTogglerService } from '../../core/service/dark-mode.service';

@Component({
  selector: 'app-dark-mode-toggler',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './dark-mode-toggler.component.html',
  styleUrl: './dark-mode-toggler.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DarkModeTogglerComponent {
  @HostBinding('class.dark-mode') isDarkMode = false;

  constructor(private darkModeService: DarkModeTogglerService) { }

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe(darkMode => {
      this.isDarkMode = darkMode;
    });
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
