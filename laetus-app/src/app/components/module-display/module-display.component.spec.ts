import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleDisplayComponent } from './module-display.component';

describe('ModuleDisplayComponent', () => {
  let component: ModuleDisplayComponent;
  let fixture: ComponentFixture<ModuleDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
