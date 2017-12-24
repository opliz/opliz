import { TestBed, inject } from '@angular/core/testing';

import { ChapterBookViewerService } from './chapter-book-viewer.service';

describe('ChapterBookViewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChapterBookViewerService]
    });
  });

  it('should be created', inject([ChapterBookViewerService], (service: ChapterBookViewerService) => {
    expect(service).toBeTruthy();
  }));
});
