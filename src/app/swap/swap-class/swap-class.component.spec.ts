import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapClassComponent } from './swap-class.component';

describe('SwapClassComponent', () => {
  let component: SwapClassComponent;
  let fixture: ComponentFixture<SwapClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
