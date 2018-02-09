import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrmContactListComponent } from './nrm-contact-list.component';

describe('NrmContactListComponent', () => {
  let component: NrmContactListComponent;
  let fixture: ComponentFixture<NrmContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrmContactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrmContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
