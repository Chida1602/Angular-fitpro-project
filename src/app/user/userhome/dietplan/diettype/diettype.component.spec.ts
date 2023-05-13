import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiettypeComponent } from './diettype.component';

describe('DiettypeComponent', () => {
  let component: DiettypeComponent;
  let fixture: ComponentFixture<DiettypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiettypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiettypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
