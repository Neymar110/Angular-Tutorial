import { Component} from '@angular/core';

@Component({
  selector: 'change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent{

  courses = [
    {id : 1, name :'course 1'},
    {id : 2, name :'course 2'},
    {id : 3, name :'course 3'}
  ]
  onAdd(){
    this.courses.push({id : 4, name : "course 4"});
  }

  onChange(course : any){
    course.name = "UPDATED"
  }

}
