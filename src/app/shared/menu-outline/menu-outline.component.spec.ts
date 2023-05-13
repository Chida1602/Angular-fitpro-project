import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOutlineComponent } from './menu-outline.component';

describe('MenuOutlineComponent', () => {
  let component: MenuOutlineComponent;
  let fixture: ComponentFixture<MenuOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOutlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
