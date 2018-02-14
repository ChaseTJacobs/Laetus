import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadInComponent } from './head-in.component';

describe('HeadInComponent', () => {
  let component: HeadInComponent;
  let fixture: ComponentFixture<HeadInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
