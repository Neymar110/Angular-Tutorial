import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;
  user$;
  userSubscription:Subscription

  constructor(
    private authService : AuthService,
    private orderService : OrderService){
      // this.user$ = authService.user$;
      // this.userSubscription = this.user$.subscribe(user => {
      //   this.orders$ = orderService.getOrdersByUser(user.uid).valueChanges()
      //   this.orders$.subscribe(data => {
      //     console.log(data);
          
      //   })
      // })

      this.orders$ = authService.user$.pipe(switchMap(u => orderService.getOrdersByUser(u.uid).valueChanges()));
    }
}
