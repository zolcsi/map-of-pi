import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';
import { DarkModeTogglerService } from '../dark-mode-toggler/dark-mode-toggler.service';
import { BehaviorSubject } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let darkModeTogglerService: DarkModeTogglerService;

  beforeEach(async () => {
    const darkModeTogglerServiceMock = { darkMode$: new BehaviorSubject<boolean>(false) };

    await TestBed.configureTestingModule({
      imports: [HeaderComponent, TranslateModule.forRoot()],
      providers: [{ provide: DarkModeTogglerService, useValue: darkModeTogglerServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    darkModeTogglerService = TestBed.inject(DarkModeTogglerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Optional Controls section', () => {
    let optionalControls: HTMLElement;

    beforeEach(() => {
      optionalControls = fixture.nativeElement.querySelector('.optional-controls');
    });

    it('should exist', () => {
      expect(optionalControls).toBeTruthy();
    });

    it('should contain language switcher component', () => {
      const languageSwitcher = optionalControls.querySelector('app-language-switcher');
      expect(languageSwitcher).toBeTruthy();
    });

    it('should contain dark mode toggler component', () => {
      const darkModeToggler = optionalControls.querySelector('app-dark-mode-toggler');
      expect(darkModeToggler).toBeTruthy();
    });
  });

  describe('Dark Mode', () => {
    it('should apply dark mode class when dark mode is enabled', () => {
      darkModeTogglerService.darkMode$.next(true);
      fixture.detectChanges();
      const toolbar = fixture.nativeElement.querySelector('.mat-toolbar');
      expect(toolbar.classList.contains('dark-mode')).toBe(true);
    });

    it('should not apply dark mode class when dark mode is disabled', () => {
      darkModeTogglerService.darkMode$.next(false);
      fixture.detectChanges();
      const toolbar = fixture.nativeElement.querySelector('.mat-toolbar');
      expect(toolbar.classList.contains('dark-mode')).toBe(false);
    });
  });
});
