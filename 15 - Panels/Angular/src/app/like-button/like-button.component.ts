import { Component, Input } from '@angular/core';

@Component({
  selector: 'like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {
  @Input("clicked") clicked : boolean = true
  @Input("clickCounter") clickCounter : number = 0;

  change(){
    this.clicked = !this.clicked
    if (this.clicked) {
      this.clickCounter++;
    }
    else {
      this.clickCounter--;
    }
  }
}
