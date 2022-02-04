import { Component, Input } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { CategoryModel } from 'src/app/models/category.model';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent{
  categories$:any;
  @Input("category") category : string | null;

  constructor(categoryService : CategoryService) {
    this.categories$ = categoryService.getCategories().subscribe(data => {
      this.categories$ = data.map(values => {
        return {
          $key: values.key,
          ...values.payload.val() as CategoryModel
        }
      })
    });
   }
}