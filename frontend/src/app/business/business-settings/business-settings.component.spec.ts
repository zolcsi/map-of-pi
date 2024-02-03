import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSettingsComponent } from './business-settings.component';

describe('BusinessSettingsComponent', () => {
  let component: BusinessSettingsComponent;
  let fixture: ComponentFixture<BusinessSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
