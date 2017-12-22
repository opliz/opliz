import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalViewChapterComponent } from './normal-view-chapter.component';

describe('NormalViewChapterComponent', () => {
  let component: NormalViewChapterComponent;
  let fixture: ComponentFixture<NormalViewChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalViewChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalViewChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
