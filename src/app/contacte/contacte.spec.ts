import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contacte } from './contacte';

describe('Contacte', () => {
  let component: Contacte;
  let fixture: ComponentFixture<Contacte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contacte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contacte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
