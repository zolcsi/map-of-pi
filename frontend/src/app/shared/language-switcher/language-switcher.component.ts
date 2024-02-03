import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AsyncPipe } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { TranslateService } from '@ngx-translate/core';

export interface LangMenuItem {
  code: string;
  name: string;
}

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatMenuModule, AsyncPipe, MatOption],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  protected readonly languages: LangMenuItem[] = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'German' },
    { code: 'hu', name: 'Hungarian' },
  ];

  constructor(private readonly translateService: TranslateService) {}

  switchLanguage(key: string): void {
    this.translateService.use(key);
  }
}
