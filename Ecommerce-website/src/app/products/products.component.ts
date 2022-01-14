import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from '../product.service';
import { ProductModel } from '../models/product-model.model';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryModel } from '../models/category.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$:ProductModel[] = [];
  filteredProducts : any;
  categories$ : any;
  category : string | null;
  
  constructor(route : ActivatedRoute, productService : ProductService, categoryService : CategoryService) {
    productService.getAll().subscribe(data => {
      this.products$ = data.map(values => {
        return {
          key: values.key,
          ...values.payload.val() as ProductModel
        }
      })

      route.queryParamMap.subscribe(params => {
        this.category = params.get("category");
        this.filteredProducts = (this.category) ? 
          this.products$.filter(p => p.category === this.category) : this.filteredProducts = this.products$;
      });
    })

    this.categories$ = categoryService.getCategories().subscribe(data => {
      this.categories$ = data.map(values => {
        return {
          $key: values.key,
          ...values.payload.val() as CategoryModel
        }
      })
    });

    
    route.queryParamMap.subscribe(params => {
      this.category = params.get("category");
      this.filteredProducts = (this.category) ? 
        this.products$.filter(p => p.category === this.category) : this.filteredProducts = this.products$;
    });

  }
  

}
