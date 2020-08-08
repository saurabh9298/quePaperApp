import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChoice3Component } from './edit-choice3.component';

describe('EditChoice3Component', () => {
  let component: EditChoice3Component;
  let fixture: ComponentFixture<EditChoice3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChoice3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChoice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
