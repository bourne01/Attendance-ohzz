import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttSeatComponent } from './att-seat.component';

describe('AttSeatComponent', () => {
  let component: AttSeatComponent;
  let fixture: ComponentFixture<AttSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
