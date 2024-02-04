import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GeolocationService } from '../../core/service/geolocation.service';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-action-row',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatProgressSpinnerModule, TranslateModule],
  templateUrl: './action-row.component.html',
  styleUrl: './action-row.component.scss',
})
export class ActionRowComponent {
  geoLoading = signal<boolean>(false);
  geolocationCoordinates: GeolocationCoordinates | undefined;

  constructor(
    private readonly geolocationService: GeolocationService,
    private readonly router: Router,
  ) {}

  locateMe(): void {
    this.geoLoading.set(true);
    this.geolocationService.getCurrentPosition().subscribe({
      next: (position: GeolocationPosition) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
        this.geolocationCoordinates = position.coords;
        this.geoLoading.set(false);
      },
      error: (error: GeolocationPosition) => {
        console.error('Error getting geolocation:', error);
        this.geoLoading.set(false);
      },
    });
  }

  navigateToBusiness(): void {
    this.router.navigate(['/business']);
  }
}
