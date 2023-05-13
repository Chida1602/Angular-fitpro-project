import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwndietComponent } from './owndiet.component';

describe('OwndietComponent', () => {
  let component: OwndietComponent;
  let fixture: ComponentFixture<OwndietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwndietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwndietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
