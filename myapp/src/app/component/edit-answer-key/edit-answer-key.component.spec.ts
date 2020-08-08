import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnswerKeyComponent } from './edit-answer-key.component';

describe('EditAnswerKeyComponent', () => {
  let component: EditAnswerKeyComponent;
  let fixture: ComponentFixture<EditAnswerKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAnswerKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnswerKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
