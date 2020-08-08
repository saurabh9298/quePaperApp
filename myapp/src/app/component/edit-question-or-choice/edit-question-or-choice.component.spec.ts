import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionOrChoiceComponent } from './edit-question-or-choice.component';

describe('EditQuestionOrChoiceComponent', () => {
  let component: EditQuestionOrChoiceComponent;
  let fixture: ComponentFixture<EditQuestionOrChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuestionOrChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuestionOrChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
