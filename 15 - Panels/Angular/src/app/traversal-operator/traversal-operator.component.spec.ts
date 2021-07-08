import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraversalOperatorComponent } from './traversal-operator.component';

describe('TraversalOperatorComponent', () => {
  let component: TraversalOperatorComponent;
  let fixture: ComponentFixture<TraversalOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraversalOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraversalOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
