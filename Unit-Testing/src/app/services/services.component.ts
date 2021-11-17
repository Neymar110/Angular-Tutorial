import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{
  todos : any[] = [];
  message : any;

  constructor(private service : TodoService) {}

  ngOnInit(){
    this.service.getTodos.subscribe(t => this.todos = t)
  }

  add() {
    var newTodo = { title : "..."};
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t)
      err => this.message = err);
  }
}
