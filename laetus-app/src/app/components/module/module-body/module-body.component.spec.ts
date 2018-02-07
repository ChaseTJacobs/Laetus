import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleBodyComponent } from './module-body.component';

describe('ModuleBodyComponent', () => {
  let component: ModuleBodyComponent;
  let fixture: ComponentFixture<ModuleBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
