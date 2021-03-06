import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit { 
  cart$ : any;
  name: any;

  constructor(private shoppingCartService  : ShoppingCartService){}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
}

}
