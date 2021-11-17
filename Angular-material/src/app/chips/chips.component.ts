import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent {
  categories = [
    {name : "Beginner", selected: false},
    {name : "Intermediate", selected: false},
    {name : "Advanced", selected: false}
  ];
  
  onClick(category : any) {
    this.categories.filter(c => c!= category).forEach(c => c["selected"] = false);

    category.selected = !category.selected;
  };

}
