import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent{
  form = new FormGroup({
    topics : new FormArray([])
  });

  addTopic(topic : HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = " ";
  }

  removeTopic(topic : any){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index)
  }
  // getControls() {
  //   return (this.form.get('topics') as FormArray).controls ;

  // }
  get topics(){
    return this.form.get('topics') as FormArray;
  }
}
