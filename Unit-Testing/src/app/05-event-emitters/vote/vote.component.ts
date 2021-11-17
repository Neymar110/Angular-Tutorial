import { Component } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-vote',
  template: `
    <p>
      vote works!
    </p>
  `,
  styles: [
  ]
})
export class VoteComponent {

  totalVotes:number = 0;
  voteChanged:EventEmitter = new EventEmitter();
  ee: EventEmitter = new EventEmitter();


  // upVote(){
  //   this.totalVotes++;
  //   this.voteChanged.emit(this.totalVotes.toString());
  // }

  constructor(){
    setInterval(_ => {
      this.ee.emit("Apple");
    }, 1000)
  }

}
