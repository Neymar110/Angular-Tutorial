/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Observable, of } from 'rxjs';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClient } from '@angular/common/http'
//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

xdescribe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports:[ HttpClient ],
      declarations: [ TodosComponent ],
      providers:[ TodoService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should load todos from the server', () => {
    let service = TestBed.get(TodoService);
    spyOn(service, "getTodos").and.returnValue(of([1, 2, 3]))

    fixture.detectChanges();
    expect(component.todo.length).toBe(3)
  });
});
