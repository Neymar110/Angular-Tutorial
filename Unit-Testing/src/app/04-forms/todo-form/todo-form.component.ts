import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  template: `
    <p>
      todo-form works!
    </p>
  `,
  styles: [
  ]
})
export class TodoFormComponent  {
  form : FormGroup;

  constructor(fb : FormBuilder){
    this.form = fb.group({
      name : ["", Validators.required],
      email:[""],
    })
  }
}
