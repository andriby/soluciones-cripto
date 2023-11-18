import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDeCarreraComponent } from './plan-de-carrera.component';

describe('PlanDeCarreraComponent', () => {
  let component: PlanDeCarreraComponent;
  let fixture: ComponentFixture<PlanDeCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDeCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDeCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
