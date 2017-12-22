import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookViewChapterComponent } from './book-view-chapter.component';

describe('BookViewChapterComponent', () => {
  let component: BookViewChapterComponent;
  let fixture: ComponentFixture<BookViewChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookViewChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
