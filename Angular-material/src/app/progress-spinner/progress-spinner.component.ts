import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';

@Component({
  selector: 'progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent {
  progress: any;
  // timer : any;
  // constructor () {
  //   this.timer = setInterval(() => {
  //     this.progress ++;
  //     if (this.progress == 100) clearInterval(this.timer) 
  //   }, 20);
  // }
  isLoading = false;
  constructor(){
    this.isLoading = true;
    // this.getCourses().subscribe(courses => this.courses = courses);
    this.getCourses().subscribe(x => {
      this.isLoading = false;
      this.progress = 1;
      console.log(this.progress);
    });
    console.log(this.progress);
    // func = > sets forms
    // func2 = > initializes variables
    //func 3 = > gets system time
  }

  getCourses(){
    return timer(2000);
  }
  func() {
    console.log();
  }
}
