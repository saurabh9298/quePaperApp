import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuebankafterclickComponent } from './quebankafterclick.component';

describe('QuebankafterclickComponent', () => {
  let component: QuebankafterclickComponent;
  let fixture: ComponentFixture<QuebankafterclickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuebankafterclickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuebankafterclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
