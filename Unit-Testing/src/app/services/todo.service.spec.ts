import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let component : any;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodoService(service)
  });

  it('should set todo"s property with the items returned from the server', () => {
    spyOn(service, "getTodos").and.callFake()
  });
});
