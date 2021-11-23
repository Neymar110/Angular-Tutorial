import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BNavbarComponent } from './b-navbar/b-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from "@angular/fire/compat";
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    BNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path : "", component:HomeComponent},
      {path : "products", component:ProductsComponent},
      {path : "shopping-cart", component:ShoppingCartComponent},
      {path : "check-out", component:CheckoutComponent},
      {path : "oder-success", component:OrderSuccessComponent},
      {path : "my/orders", component: MyOrdersComponent},
      {path : "login", component:LoginComponent},
      {path : "admin/products", component:AdminProductsComponent},
      {path : "admin/orders", component:AdminOrdersComponent}
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
