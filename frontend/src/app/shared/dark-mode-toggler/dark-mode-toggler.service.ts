import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/* the service provides a centralized and reusable way to manage dark mode functionality throughout the app. */
export class DarkModeTogglerService {
  private darkModeSubject: BehaviorSubject<boolean>;
  public darkMode$: BehaviorSubject<boolean>;

  constructor() {
    this.darkModeSubject = new BehaviorSubject<boolean>(false);
    this.darkMode$ = this.darkModeSubject;
  }

  toggleDarkMode() {
    const currentMode = this.darkModeSubject.value;
    this.darkModeSubject.next(!currentMode);
  }

  getDarkMode(): boolean {
    return this.darkModeSubject.value;
  }
}
