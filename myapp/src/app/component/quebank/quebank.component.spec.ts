import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuebankComponent } from './quebank.component';

describe('QuebankComponent', () => {
  let component: QuebankComponent;
  let fixture: ComponentFixture<QuebankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuebankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
