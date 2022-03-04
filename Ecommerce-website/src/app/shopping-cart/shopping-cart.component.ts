import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$:Observable<ShoppingCart>;
  cartSubscription: Subscription;
  displayCart: any
  cart: any

  constructor(private shoppingCartService : ShoppingCartService, private productService : ProductService, private router: Router) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.getCart()
  }

  async getCart() {    
    this.cartSubscription = this.cart$.subscribe(data => {
      if (data){
        this.cart = data
        this.displayCart = Object.values(data.items);
        let keyArray = Object.keys(data.items);
        let index = 0
        
        this.displayCart['totalPrice'] = 0;
        for(let item of this.displayCart){
          
          let totalPrice = item.price * item.quantity;
          
          this.displayCart['totalPrice'] += totalPrice;
          item['totalPrice'] = totalPrice
          item['key'] = keyArray[index];
          index++;
        }
      }
      else{
        this.displayCart = []
      }
    })
  }

  get totalItemsCount() {
    let count = 0
    for(let item of this.displayCart){
      count += item.quantity
    }
    return count
  }

  create_order(){
    // this.cartSubscription.unsubscribe();
    // this.productService.create_order(this.displayCart);
    // let cartId = localStorage.getItem("cartId");
    // this.shoppingCartService.delete_shopping_cart(cartId)
    // this.router.navigate(['/check-out']);
    // console.log("Order created and shopping cart deleted.")
  }

  clearCart(){
    this.shoppingCartService.clearCart();
  }
}
