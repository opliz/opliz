import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterBookViewerComponent } from './chapter-book-viewer.component';

describe('ChapterBookViewerComponent', () => {
  let component: ChapterBookViewerComponent;
  let fixture: ComponentFixture<ChapterBookViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterBookViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterBookViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
