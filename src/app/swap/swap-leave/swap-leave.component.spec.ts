import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapLeaveComponent } from './swap-leave.component';

describe('SwapLeaveComponent', () => {
  let component: SwapLeaveComponent;
  let fixture: ComponentFixture<SwapLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
