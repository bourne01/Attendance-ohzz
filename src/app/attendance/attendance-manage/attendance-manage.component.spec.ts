import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceManageComponent } from './attendance-manage.component';

describe('AttendanceManageComponent', () => {
  let component: AttendanceManageComponent;
  let fixture: ComponentFixture<AttendanceManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
