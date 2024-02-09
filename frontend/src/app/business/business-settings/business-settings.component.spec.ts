import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessSettingsComponent } from './business-settings.component';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BusinessSettingsComponent', () => {
  let component: BusinessSettingsComponent;
  let fixture: ComponentFixture<BusinessSettingsComponent>;

  beforeEach(async () => {

    const activatedRouteStub = {
      snapshot: {
        paramMap: new Map<string, string>()
      }
    };

    await TestBed.configureTestingModule({
      imports: [BusinessSettingsComponent, NoopAnimationsModule, TranslateModule.forRoot()],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
