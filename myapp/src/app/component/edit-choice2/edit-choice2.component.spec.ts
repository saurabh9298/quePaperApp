import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChoice2Component } from './edit-choice2.component';

describe('EditChoice2Component', () => {
  let component: EditChoice2Component;
  let fixture: ComponentFixture<EditChoice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChoice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChoice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
