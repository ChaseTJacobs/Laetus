import { TestBed, inject } from '@angular/core/testing';

import { NrmService } from './nrm.service';

describe('NrmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NrmService]
    });
  });

  it('should be created', inject([NrmService], (service: NrmService) => {
    expect(service).toBeTruthy();
  }));
});
