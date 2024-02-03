import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSettingsComponent } from './products-settings.component';

describe('ProductsSettingsComponent', () => {
  let component: ProductsSettingsComponent;
  let fixture: ComponentFixture<ProductsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
