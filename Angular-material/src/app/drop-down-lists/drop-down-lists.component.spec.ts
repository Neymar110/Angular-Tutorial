import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownListsComponent } from './drop-down-lists.component';

describe('DropDownListsComponent', () => {
  let component: DropDownListsComponent;
  let fixture: ComponentFixture<DropDownListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
