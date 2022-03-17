import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'shared/service/product.service';
import { Product } from 'shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy{
  products$:Product[] = [];
  filteredProducts : any;
  category : string | null;
  cart : any;
  subscription : Subscription;
  // p:any;

  constructor(
    route : ActivatedRoute, 
    productService : ProductService, 
    private shoppingCartService : ShoppingCartService
    ){

  

    
    productService.getAll().subscribe(data => {
      this.products$ = data.map(values => {
        return {
          key: values.key,
          ...values.payload.val() as Product
        }
      })

      route.queryParamMap.subscribe(params => {
        this.category = params.get("category");
        this.filteredProducts = (this.category) ? 
          this.products$.filter(p => p.category === this.category) : this.filteredProducts = this.products$;
      });
    })
  }
  async ngOnInit(){
    this.subscription = (await this.shoppingCartService.getCart())
    .subscribe(cart => {
      this.cart = cart
      // console.log(cart)
      // console.log('DB cart is:', cart, 'and this.cart is: ', this.cart);
    })
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}

