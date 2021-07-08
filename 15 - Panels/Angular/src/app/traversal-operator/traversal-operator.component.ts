import { Component } from '@angular/core';

@Component({
  selector: 'traversal-operator',
  templateUrl: './traversal-operator.component.html',
  styleUrls: ['./traversal-operator.component.css']
})
export class TraversalOperatorComponent{
  task = {
    title : "Review applications",
    assignee : {
      name : "John Smith"
    }
    }
}
