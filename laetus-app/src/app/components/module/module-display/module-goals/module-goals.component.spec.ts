import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleGoalsComponent } from './module-goals.component';

describe('ModuleGoalsComponent', () => {
  let component: ModuleGoalsComponent;
  let fixture: ComponentFixture<ModuleGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
