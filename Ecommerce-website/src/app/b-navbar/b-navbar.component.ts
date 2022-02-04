import { Component, OnInit } from '@angular/core';
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
  cart$ : Observable<ShoppingCart | null>;


  constructor(private auth : AuthService, private shoppingCartService : ShoppingCartService) {     
    // He prefers to have all the initialization of things in one place at a time. i.e Constructor or NgOnInit
  }

  async ngOnInit() {
    this.auth.appUser$.then(dataObservable => {
      dataObservable?.subscribe(data => {
        this.appUser = data
      });
    });

    this.cart$ = await this.shoppingCartService.getCart()
    

  }

  logout(){
    this.auth.logout();
    this.appUser = null;
  }

}
