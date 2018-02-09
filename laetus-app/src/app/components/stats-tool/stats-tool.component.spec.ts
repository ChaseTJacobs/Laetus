import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsToolComponent } from './stats-tool.component';

describe('StatsToolComponent', () => {
  let component: StatsToolComponent;
  let fixture: ComponentFixture<StatsToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
