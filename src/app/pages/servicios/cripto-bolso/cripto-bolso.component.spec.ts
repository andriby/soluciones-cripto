import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptoBolsoComponent } from './cripto-bolso.component';

describe('CriptoBolsoComponent', () => {
  let component: CriptoBolsoComponent;
  let fixture: ComponentFixture<CriptoBolsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriptoBolsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriptoBolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
