import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrmContactInfoComponent } from './nrm-contact-info.component';

describe('NrmContactInfoComponent', () => {
  let component: NrmContactInfoComponent;
  let fixture: ComponentFixture<NrmContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrmContactInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrmContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
