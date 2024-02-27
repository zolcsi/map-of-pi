import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessConfigurationComponent } from './business-configuration.component';

describe('BusinessConfigurationComponent', () => {
  let component: BusinessConfigurationComponent;
  let fixture: ComponentFixture<BusinessConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessConfigurationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with default values', () => {
    expect(component.menuStatusLabel).toBe('on');
    expect(component.orderStatusLabel).toBe('off');
    expect(component.paymentStatusLabel).toBe('on');
  });

  it('should load toggle states and update form', () => {
    spyOn(component, 'initializeToggles');
    spyOn(component, 'updateToggleLabels');
    spyOn(component, 'updateSliderAppearance');
    spyOn(component, 'updateFloatingButtonVisibility');

    component.loadToggleStates();

    expect(component.initializeToggles).toHaveBeenCalled();
    expect(component.updateToggleLabels).toHaveBeenCalled();
    expect(component.updateSliderAppearance).toHaveBeenCalled();
    expect(component.updateFloatingButtonVisibility).toHaveBeenCalled();
  });

  it('should update toggle labels correctly', () => {
    component.menuToggle.nativeElement.checked = true;

    component.orderToggleDiv.nativeElement.querySelector('input')!.checked = true;
    component.paymentToggleDiv.nativeElement.querySelector('input')!.checked = false;

    component.updateToggleLabels();

    expect(component.menuStatusLabel).toEqual('on');
    expect(component.orderStatusLabel).toEqual('on');
    expect(component.paymentStatusLabel).toEqual('off');
  });

  // it('should hide appropriate sections when menuEnabled is false', () => {
  //   component.menuToggle.nativeElement.checked = false;

  //   component.loadToggleStates();
  //   fixture.detectChanges();

  //   expect(component.orderToggleDiv.nativeElement.classList.contains('hidden')).toBeTruthy();
  //   expect(component.paymentToggleDiv.nativeElement.classList.contains('hidden')).toBeTruthy();
  //   expect(component.floatingButtonSection.nativeElement.classList.contains('hidden')).toBeTruthy();
  // });

  it('should call saveToggleStates on toggle change', () => {
    spyOn(component, 'saveToggleStates');
    component.onToggleChange('menu-toggle');
    expect(component.saveToggleStates).toHaveBeenCalled();
  });
});
