import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietPlanFormComponent } from './diet-plan-form.component';

describe('DietPlanFormComponent', () => {
  let component: DietPlanFormComponent;
  let fixture: ComponentFixture<DietPlanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietPlanFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
