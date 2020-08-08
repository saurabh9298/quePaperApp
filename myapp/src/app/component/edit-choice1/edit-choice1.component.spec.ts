import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChoice1Component } from './edit-choice1.component';

describe('EditChoice1Component', () => {
  let component: EditChoice1Component;
  let fixture: ComponentFixture<EditChoice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChoice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChoice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
