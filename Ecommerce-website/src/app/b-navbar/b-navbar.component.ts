import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'b-navbar',
  templateUrl: './b-navbar.component.html',
  styleUrls: ['./b-navbar.component.css']
})
export class BNavbarComponent {
  appUser: any;

  constructor(private auth : AuthService) {     
    auth.appUser$.then(dataObservable => {
      dataObservable?.subscribe(data => {
        this.appUser = data
      })
    })
    
  }

  logout(){
    this.auth.logout();
    this.appUser = null;
  }

}
