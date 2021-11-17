import { Component } from '@angular/core';

@Component({
  selector: 'inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent  {
  log(x : any) {
    console.log(x);  
  }
}
