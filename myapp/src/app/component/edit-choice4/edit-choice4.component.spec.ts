import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChoice4Component } from './edit-choice4.component';

describe('EditChoice4Component', () => {
  let component: EditChoice4Component;
  let fixture: ComponentFixture<EditChoice4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChoice4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChoice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
