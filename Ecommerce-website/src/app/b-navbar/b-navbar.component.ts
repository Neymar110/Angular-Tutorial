import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'b-navbar',
  templateUrl: './b-navbar.component.html',
  styleUrls: ['./b-navbar.component.css']
})
export class BNavbarComponent implements OnInit{
  appUser: any;
  cart$ : Observable<ShoppingCart>;
  cart: any


  constructor(private auth : AuthService, private shoppingCartService : ShoppingCartService, private router : Router) {     
    // He prefers to have all the initialization of things in one place at a time. i.e Constructor or NgOnInit
    // this.shoppingCartService.getCart().then(this.getCart)
  }

  async ngOnInit() {
    this.auth.appUser$.then(dataObservable => {
      dataObservable?.subscribe(data => {
        this.appUser = data
      });
    });

    this.getCart()
  }

  async getCart() {
    this.cart$ = await this.shoppingCartService.getCart()
    
    this.cart$.subscribe(data => {
      if(data){
        this.cart = Object.values(data.items);
      }
      else {
        this.cart = null
      }
      // console.log(this.cart.totalItemsCount);
      
    })
  }

  logout(){
    this.auth.logout();
    this.appUser = null;
    this.router.navigate(['/'])
  }

  get totalItemsCount() {
    let count = 0
    for(let item of this.cart){
      count += item.quantity
    }
    return count
  }

}
