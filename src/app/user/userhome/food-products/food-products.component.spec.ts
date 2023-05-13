import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodProductsComponent } from './food-products.component';

describe('FoodProductsComponent', () => {
  let component: FoodProductsComponent;
  let fixture: ComponentFixture<FoodProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
