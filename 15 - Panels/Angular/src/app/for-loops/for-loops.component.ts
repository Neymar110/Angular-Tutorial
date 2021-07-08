import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'for-loops',
  templateUrl: './for-loops.component.html',
  styleUrls: ['./for-loops.component.css']
})
export class ForLoopsComponent{

 courses = [
   {id :1, name : "course 1"},
   {id :2, name : "course 2"},
   {id :3, name : "course 3"}
 ];
}
