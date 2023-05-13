import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumpageboxComponent } from './forumpagebox.component';

describe('ForumpageboxComponent', () => {
  let component: ForumpageboxComponent;
  let fixture: ComponentFixture<ForumpageboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumpageboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumpageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
