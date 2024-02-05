import { TestBed } from '@angular/core/testing';
import { DarkModeTogglerService } from './dark-mode.service';

describe('DarkModeTogglerService', () => {
  let service: DarkModeTogglerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DarkModeTogglerService]
    });
    service = TestBed.inject(DarkModeTogglerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle dark mode', () => {
    const initialToggleValue = service.getDarkMode();
    expect(initialToggleValue).toBe(false);

    service.toggleDarkMode();
    const afterFirstToggleValue = service.getDarkMode();
    expect(afterFirstToggleValue).toBe(true);

    service.toggleDarkMode();
    const afterSecondToggleValue = service.getDarkMode();
    expect(afterSecondToggleValue).toBe(false);
  });
});
