import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;
  beforeEach(()=> {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes:any;
    component.voteChanged.subscribe()
  });
});
