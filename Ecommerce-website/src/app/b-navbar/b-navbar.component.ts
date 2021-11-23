import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'b-navbar',
  templateUrl: './b-navbar.component.html',
  styleUrls: ['./b-navbar.component.css']
})
export class BNavbarComponent {

  constructor(public auth : AuthService) { }

  logout(){
    this.auth.logout()
  }

}
