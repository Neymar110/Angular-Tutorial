import { Component } from '@angular/core';

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

  upVote(){
    this.totalVotes++;
  }

  downVote(){
    this.totalVotes--;
  }
}
