import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNameQuesBankComponent } from './edit-name-ques-bank.component';

describe('EditNameQuesBankComponent', () => {
  let component: EditNameQuesBankComponent;
  let fixture: ComponentFixture<EditNameQuesBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNameQuesBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNameQuesBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
