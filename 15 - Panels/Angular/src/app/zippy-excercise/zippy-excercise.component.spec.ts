import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyExcerciseComponent } from './zippy-excercise.component';

describe('ZippyExcerciseComponent', () => {
  let component: ZippyExcerciseComponent;
  let fixture: ComponentFixture<ZippyExcerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZippyExcerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
