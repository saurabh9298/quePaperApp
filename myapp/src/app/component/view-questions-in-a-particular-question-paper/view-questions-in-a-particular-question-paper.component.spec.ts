import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuestionsInAParticularQuestionPaperComponent } from './view-questions-in-a-particular-question-paper.component';

describe('ViewQuestionsInAParticularQuestionPaperComponent', () => {
  let component: ViewQuestionsInAParticularQuestionPaperComponent;
  let fixture: ComponentFixture<ViewQuestionsInAParticularQuestionPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewQuestionsInAParticularQuestionPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuestionsInAParticularQuestionPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
