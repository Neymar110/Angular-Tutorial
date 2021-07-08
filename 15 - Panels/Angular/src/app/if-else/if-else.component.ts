import { Component } from '@angular/core';

@Component({
  selector: 'if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent {
  clicked : boolean = true
  change(){
    this.clicked = !this.clicked
  }
}