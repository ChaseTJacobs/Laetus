import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrmContactActivitiesComponent } from './nrm-contact-activities.component';

describe('NrmContactActivitiesComponent', () => {
  let component: NrmContactActivitiesComponent;
  let fixture: ComponentFixture<NrmContactActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrmContactActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrmContactActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
