import { Component, Inject, InjectionToken, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  @Input() data : any;
  
  constructor(@Inject(MAT_DIALOG_DATA) data : CourseService) { console.log("Data", data);}

  ngOnInit(): void {
  }

}
