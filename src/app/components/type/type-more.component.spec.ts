import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMoreComponent } from './type-more.component';

describe('TypeMoreComponent', () => {
  let component: TypeMoreComponent;
  let fixture: ComponentFixture<TypeMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
