import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService as AdminAuthGuard } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { TestDirectiveDirective } from './test-directive.directive';
import { ProductValidatorDirective } from './admin/product-form/product-validator.directive';
import { ImageUrlValidatorDirective } from './admin/product-form/image-url-validator.directive';
import { MatTableModule } from '@angular/material/table';
import { AngularMaterialTableComponent } from './angular-material-table/angular-material-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

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
    AdminOrdersComponent,
    ProductFormComponent,
    TestDirectiveDirective,
    ProductValidatorDirective,
    ImageUrlValidatorDirective,
    AngularMaterialTableComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      {path : "", component:HomeComponent},
      {path : "login", component:LoginComponent},
      {path : "shopping-cart", component:ShoppingCartComponent},
      {path : "check-out", component:CheckoutComponent, canActivate:[ AuthGuard ]},
      {path : "my/orders", component: MyOrdersComponent, canActivate:[ AuthGuard ]},
      {path : "order-success", component:OrderSuccessComponent, canActivate:[ AuthGuard ]},
      {path : "products", component:ProductsComponent},
      {path : "admin/products/new", component:ProductFormComponent, canActivate:[ AuthGuard, AdminAuthGuard ]},
      {path : "admin/products/:id", component:ProductFormComponent, canActivate:[ AuthGuard, AdminAuthGuard ]},
      {path : "admin/products", component:AdminProductsComponent, canActivate:[ AuthGuard, AdminAuthGuard ]},
      {path : "admin/orders", component:AdminOrdersComponent, canActivate:[ AuthGuard, AdminAuthGuard ]}
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuard,
    CategoryService,
    ProductService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
