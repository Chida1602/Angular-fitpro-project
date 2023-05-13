import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodChildComponent } from './food-child.component';

describe('FoodChildComponent', () => {
  let component: FoodChildComponent;
  let fixture: ComponentFixture<FoodChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
