import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';
import { Router } from '@angular/router';

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
  cart : ShoppingCart;
  cartSubscription : Subscription;
  userSubscription : Subscription;
  name: any;
  userId : string;

  constructor(
    private router : Router,
    private shoppingCartService  : ShoppingCartService, 
    private orderService : OrderService,
    private authService : AuthService){}
  
  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(["order-success", result.key])
  }    

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart)
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid)
}

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

}
