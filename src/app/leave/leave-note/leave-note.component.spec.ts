import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveNoteComponent } from './leave-note.component';

describe('LeaveNoteComponent', () => {
  let component: LeaveNoteComponent;
  let fixture: ComponentFixture<LeaveNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
