import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBoxComponent } from './details-box.component';

describe('DetailsBoxComponent', () => {
  let component: DetailsBoxComponent;
  let fixture: ComponentFixture<DetailsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
