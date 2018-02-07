import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrmCreateActivityComponent } from './nrm-create-activity.component';

describe('NrmCreateActivityComponent', () => {
  let component: NrmCreateActivityComponent;
  let fixture: ComponentFixture<NrmCreateActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrmCreateActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrmCreateActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
