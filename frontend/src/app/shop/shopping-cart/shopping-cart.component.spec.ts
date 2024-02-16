import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize order button on ngOnInit', () => {
    spyOn(component, 'setupOrderButton').and.callThrough();
    component.ngOnInit();
    expect(component.setupOrderButton).toHaveBeenCalled();
  });

  it('should handle order button click', () => {
    const spy = spyOn(component, 'handleOrderButtonClick').and.callThrough();
    const button = fixture.nativeElement.querySelector('.cart-content__order-button');
    button.click();
    expect(spy).toHaveBeenCalled();
  });
});
