import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'drop-down-lists',
  templateUrl: './drop-down-lists.component.html',
  styleUrls: ['./drop-down-lists.component.css']
})
export class DropDownListsComponent {
  items = [
    "Red",
    "Green",
    "Blue"
  ];
}
