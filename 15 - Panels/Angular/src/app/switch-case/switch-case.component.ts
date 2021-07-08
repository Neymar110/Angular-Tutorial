import { Component} from '@angular/core';

@Component({
  selector: 'switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent{
  viewMode = 'list';
  test: boolean = true;
  // this.viewMode = "map";
  
}
