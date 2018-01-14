import { TestBed, inject } from '@angular/core/testing';

import { AttService } from './att.service';

describe('AttService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttService]
    });
  });

  it('should be created', inject([AttService], (service: AttService) => {
    expect(service).toBeTruthy();
  }));
});
