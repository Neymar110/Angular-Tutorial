import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.css']
})
export class TrackByComponent{

  courses : any;

  loadCourses() {
    this.courses  = [
      {id : 1, name :'course 1'},
      {id : 2, name :'course 2'},
      {id : 3, name :'course 3'}
    ];
  }

  trackCourse(course : any){
    return course ? course.id : undefined;
  }

}
