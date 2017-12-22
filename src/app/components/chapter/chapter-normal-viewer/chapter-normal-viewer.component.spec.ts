import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterNormalViewerComponent } from './chapter-normal-viewer.component';

describe('ChapterNormalViewerComponent', () => {
  let component: ChapterNormalViewerComponent;
  let fixture: ComponentFixture<ChapterNormalViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterNormalViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterNormalViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
