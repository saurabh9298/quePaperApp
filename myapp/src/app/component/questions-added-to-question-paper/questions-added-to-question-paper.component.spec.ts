import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAddedToQuestionPaperComponent } from './questions-added-to-question-paper.component';

describe('QuestionsAddedToQuestionPaperComponent', () => {
  let component: QuestionsAddedToQuestionPaperComponent;
  let fixture: ComponentFixture<QuestionsAddedToQuestionPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsAddedToQuestionPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsAddedToQuestionPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
