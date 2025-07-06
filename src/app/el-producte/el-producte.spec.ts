import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElProducte } from './el-producte';

describe('ElProducte', () => {
  let component: ElProducte;
  let fixture: ComponentFixture<ElProducte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElProducte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElProducte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
