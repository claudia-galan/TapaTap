import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaNostraHistoria } from './la-nostra-historia';

describe('LaNostraHistoria', () => {
  let component: LaNostraHistoria;
  let fixture: ComponentFixture<LaNostraHistoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaNostraHistoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaNostraHistoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
