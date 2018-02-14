import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOutComponent } from './head-out.component';

describe('HeadOutComponent', () => {
  let component: HeadOutComponent;
  let fixture: ComponentFixture<HeadOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
