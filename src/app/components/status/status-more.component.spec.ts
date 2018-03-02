import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMoreComponent } from './status-more.component';

describe('StatusMoreComponent', () => {
  let component: StatusMoreComponent;
  let fixture: ComponentFixture<StatusMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
