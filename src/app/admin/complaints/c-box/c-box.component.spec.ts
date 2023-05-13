import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBoxComponent } from './c-box.component';

describe('CBoxComponent', () => {
  let component: CBoxComponent;
  let fixture: ComponentFixture<CBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
