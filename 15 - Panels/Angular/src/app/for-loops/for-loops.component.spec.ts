import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopsComponent } from './for-loops.component';

describe('ForLoopsComponent', () => {
  let component: ForLoopsComponent;
  let fixture: ComponentFixture<ForLoopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForLoopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForLoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
