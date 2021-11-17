import { VoteComponent } from './vote.component';

// Using the triple A testing practice

describe('VoteComponent', () => {
  let component:VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  // afterEach()

  // beforeAll()

  // afterAll()
    

  it("should increment totalVotes when upvoted", () =>{
    // Arrange

    // let component = new VoteComponent();
    
    // Act 
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);

  });
  it("should decrement totalVotes when downvoted", () =>{
    // Arrange
    let component = new VoteComponent();
    
    // Act 
    component.downVote();

    // Assert
    expect(component.totalVotes).toBe(-1);

  });
});
