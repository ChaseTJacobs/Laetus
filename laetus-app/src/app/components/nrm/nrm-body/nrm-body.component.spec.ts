import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrmBodyComponent } from './nrm-body.component';

describe('NrmBodyComponent', () => {
  let component: NrmBodyComponent;
  let fixture: ComponentFixture<NrmBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrmBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrmBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
