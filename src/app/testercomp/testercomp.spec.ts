import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testercomp } from './testercomp';

describe('Testercomp', () => {
  let component: Testercomp;
  let fixture: ComponentFixture<Testercomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testercomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testercomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
