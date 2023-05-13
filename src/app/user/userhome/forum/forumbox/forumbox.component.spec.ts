import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumboxComponent } from './forumbox.component';

describe('ForumboxComponent', () => {
  let component: ForumboxComponent;
  let fixture: ComponentFixture<ForumboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
