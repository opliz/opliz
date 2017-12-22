import { TestBed, inject } from '@angular/core/testing';

import { ChapterNormalViewerService } from './chapter-normal-viewer.service';

describe('ChapterNormalViewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChapterNormalViewerService]
    });
  });

  it('should be created', inject([ChapterNormalViewerService], (service: ChapterNormalViewerService) => {
    expect(service).toBeTruthy();
  }));
});
