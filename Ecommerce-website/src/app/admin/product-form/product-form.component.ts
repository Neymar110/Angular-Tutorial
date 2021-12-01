import { Component } from '@angular/core';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  // The dollar sign indicates that this variable is an observable
  categories$:any;

  constructor(categoryService : CategoryService, private productService : ProductService) {
    categoryService.getCategories().subscribe( data => {
      this.categories$ = data.map(x => {
        return x.payload.val();
      });
    })    
  }
  
  dlr = faDollarSign;

  save(product:object){
    this.productService.create(product);
  }

}