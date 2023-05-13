import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietbenefitsComponent } from './dietbenefits.component';

describe('DietbenefitsComponent', () => {
  let component: DietbenefitsComponent;
  let fixture: ComponentFixture<DietbenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietbenefitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietbenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
