import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MapComponent } from './map/map.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe } from '@angular/common';
import { map, Observable, startWith } from 'rxjs';
import { Router } from '@angular/router';
import { UiStateService } from '../core/service/ui-state.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MapComponent,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    TranslateModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  searchBarControl = new FormControl('');
  options: string[] = ['R', 'Re', 'Res', 'Rest', 'Resta', 'Restau', 'Restaur', 'Restaura', 'Restauran', 'Restaurant'];
  filteredOptions$!: Observable<string[]>;

  constructor(
    private readonly uiStateService: UiStateService,
    private readonly router: Router,
  ) {
    this.uiStateService.setShowBackButton(false);
  }

  ngOnInit() {
    this.filteredOptions$ = this.searchBarControl.valueChanges.pipe(
      startWith(''),
      map((value: string | null) => this.options.filter((option) => option.toLowerCase().includes((value || '').toLowerCase()))),
    );
  }

  locateMe(): void {
    console.log('# HomeComponent :: locateMe()');
  }

  navigateToBusiness(): void {
    this.router.navigate(['/business']);
  }
}
