import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferirComponent } from './referir.component';

describe('ReferirComponent', () => {
  let component: ReferirComponent;
  let fixture: ComponentFixture<ReferirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
