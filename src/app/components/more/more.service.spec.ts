import { TestBed, inject } from '@angular/core/testing';

import { MoreService } from './more.service';

describe('MoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoreService]
    });
  });

  it('should be created', inject([MoreService], (service: MoreService) => {
    expect(service).toBeTruthy();
  }));
});
