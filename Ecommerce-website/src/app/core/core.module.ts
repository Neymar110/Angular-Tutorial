import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BNavbarComponent } from './components/b-navbar/b-navbar.component';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    BNavbarComponent,
  ],
  exports:[
    BNavbarComponent
  ]
  ,
imports: [
    RouterModule.forChild([])
  ]
})
export class CoreModule { }
