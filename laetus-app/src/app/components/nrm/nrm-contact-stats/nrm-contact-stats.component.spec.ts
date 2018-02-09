import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrmContactStatsComponent } from './nrm-contact-stats.component';

describe('NrmContactStatsComponent', () => {
  let component: NrmContactStatsComponent;
  let fixture: ComponentFixture<NrmContactStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrmContactStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrmContactStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
