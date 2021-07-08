import { Component, Input} from '@angular/core';

@Component({
  selector: 'zippy-excercise',
  templateUrl: './zippy-excercise.component.html',
  styleUrls: ['./zippy-excercise.component.css']
})
export class ZippyExcerciseComponent{
  @Input("title") title : string = "Defaultks";
  clicked:boolean = false;

  // onClick(){
  //   let text_location = document.getElementById("collapseOne");
  //   let Button_location = document.getElementById("button-id");
  //   if(text_location?.classList.contains("show")){
  //     text_location.classList.remove("show")
  //     Button_location?.classList.add("collapsed")
  //   }
  //   else {
  //     text_location?.classList.add("show")
  //     Button_location?.classList.remove("collapsed")
  //   }
  // }

  onClick(){
    this.clicked = !this.clicked;
  }
  
}
