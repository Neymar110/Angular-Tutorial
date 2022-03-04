import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';
import { OrderService } from '../order.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy { 
  shipping = {
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
  };
  // shipping: any 
  cart : ShoppingCart
  subscription : Subscription
  name: any

  constructor(
    private shoppingCartService  : ShoppingCartService, 
    private orderService : OrderService){}
  
  placeOrder() {
    // console.log(this.cart);
    
    let orderItems = Object.values(this.cart.items)    
    
    let order = {
      datePlaced : new Date().getTime(),
      shipping:this.shipping,      
      items: orderItems
      .map(i => {
        return {
          product : {
            title : i.title,
            imageUrl : i.imageUrl,
            price : i.price
          },
            quantity : i.quantity,
            totalPrice : i.quantity * i.price
        }
      })
    }    
    this.orderService.storeOrder(order)
  }    

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart();
    this.subscription = cart$ .subscribe(cart => this.cart = cart)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
