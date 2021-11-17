import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseComponent } from '../edit-course/edit-course.component';
@Component({
  selector: 'dialogs',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(private dialog : MatDialog){

  }
  openDialog() {
    this.dialog.open(EditCourseComponent, {data: {courseId: 1} }).afterClosed().subscribe(result => console.log(result));
  }
}
