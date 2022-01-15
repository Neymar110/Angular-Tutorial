import { Component, Input } from '@angular/core';
import { ProductModel } from '../models/product-model.model';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product:ProductModel;
  @Input('show-actions') showActions : boolean = true;
  constructor() { }

}
