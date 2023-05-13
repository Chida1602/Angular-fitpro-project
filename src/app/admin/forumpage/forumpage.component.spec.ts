import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumpageComponent } from './forumpage.component';

describe('ForumpageComponent', () => {
  let component: ForumpageComponent;
  let fixture: ComponentFixture<ForumpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
