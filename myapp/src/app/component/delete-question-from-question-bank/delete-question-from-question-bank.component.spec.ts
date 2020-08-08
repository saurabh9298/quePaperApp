import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQuestionFromQuestionBankComponent } from './delete-question-from-question-bank.component';

describe('DeleteQuestionFromQuestionBankComponent', () => {
  let component: DeleteQuestionFromQuestionBankComponent;
  let fixture: ComponentFixture<DeleteQuestionFromQuestionBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteQuestionFromQuestionBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQuestionFromQuestionBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
