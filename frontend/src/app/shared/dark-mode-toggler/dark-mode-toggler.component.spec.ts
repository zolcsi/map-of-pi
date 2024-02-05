import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DarkModeTogglerComponent } from './dark-mode-toggler.component';
import { DarkModeTogglerService } from '../../core/service/dark-mode.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject } from 'rxjs';

describe('DarkModeTogglerComponent', () => {
  let component: DarkModeTogglerComponent;
  let fixture: ComponentFixture<DarkModeTogglerComponent>;
  let darkModeService: jasmine.SpyObj<DarkModeTogglerService>;

  beforeEach(async () => {
    darkModeService = jasmine.createSpyObj('DarkModeTogglerService', ['toggleDarkMode']);
    darkModeService.darkMode$ = new BehaviorSubject<boolean>(false);

    await TestBed.configureTestingModule({
      imports: [DarkModeTogglerComponent, MatIconModule, MatButtonModule],
      providers: [
        { provide: DarkModeTogglerService, useValue: darkModeService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DarkModeTogglerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initially set dark mode to false', () => {
    expect(component.isDarkMode).toBe(false);
  });

  it('should subscribe to darkMode$ from DarkModeTogglerService', () => {
    fixture.detectChanges();
    expect(component.isDarkMode).toBe(false);

    darkModeService.darkMode$.next(true);
    
    fixture.detectChanges();
    expect(component.isDarkMode).toBe(true);
  });

  it('should call toggleDarkMode() method from DarkModeTogglerService', () => {
    component.toggleDarkMode();
    expect(darkModeService.toggleDarkMode).toHaveBeenCalled();
  });
});
