import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionsToQuestionPaperComponent } from './add-questions-to-question-paper.component';

describe('AddQuestionsToQuestionPaperComponent', () => {
  let component: AddQuestionsToQuestionPaperComponent;
  let fixture: ComponentFixture<AddQuestionsToQuestionPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionsToQuestionPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionsToQuestionPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
