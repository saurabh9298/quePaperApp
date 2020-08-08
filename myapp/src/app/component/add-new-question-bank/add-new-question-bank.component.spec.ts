import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewQuestionBankComponent } from './add-new-question-bank.component';

describe('AddNewQuestionBankComponent', () => {
  let component: AddNewQuestionBankComponent;
  let fixture: ComponentFixture<AddNewQuestionBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewQuestionBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewQuestionBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
