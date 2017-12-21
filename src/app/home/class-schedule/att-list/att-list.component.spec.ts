import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttListComponent } from './att-list.component';

describe('AttListComponent', () => {
  let component: AttListComponent;
  let fixture: ComponentFixture<AttListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
