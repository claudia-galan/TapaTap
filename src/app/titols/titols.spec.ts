import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titols } from './titols';

describe('Titols', () => {
  let component: Titols;
  let fixture: ComponentFixture<Titols>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Titols]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Titols);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
