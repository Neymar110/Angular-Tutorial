import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BNavbarComponent } from './core/components/b-navbar/b-navbar.component';
import { HomeComponent } from './core/components/home/home.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { LoginComponent } from './core/components/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from "@angular/fire/compat";
import { AuthService } from 'shared/service/auth.service';
import { AuthGuardService as AuthGuard } from 'app/shared/service/auth-guard.service';
import { UserService } from 'shared/service/user.service';
import { AdminAuthGuardService as AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryService } from 'shared/service/category.service';
import { ProductService } from 'shared/service/product.service';
import { TestDirectiveDirective } from './test-directive.directive';
import { ProductValidatorDirective } from './admin/components/product-form/product-validator.directive';
import { ImageUrlValidatorDirective } from './admin/components/product-form/image-url-validator.directive';
import { MatTableModule } from '@angular/material/table';
import { AngularMaterialTableComponent } from './angular-material-table/angular-material-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductFilterComponent } from './shopping/components/products/product-filter/product-filter.component';
import { ProductCardComponent } from 'shared/components/product-card/product-card.component';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';
import { ProductQuantityComponent } from 'shared/components/product-quantity/product-quantity.component';
import { OrderService } from 'shared/service/order.service';
import { ShoppingCartSummaryComponent } from './shopping/components/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shopping/components/shipping-form/shipping-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    TestDirectiveDirective,
    ProductValidatorDirective,
    ImageUrlValidatorDirective,
    AngularMaterialTableComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      {path : "", component:ProductsComponent},
      {path : "login", component:LoginComponent},
      {path : "shopping-cart", component:ShoppingCartComponent},
      {path : "check-out", component:CheckOutComponent, canActivate:[ AuthGuard ]},
      {path : "my/orders", component: MyOrdersComponent, canActivate:[ AuthGuard ]},
      {path : "order-success/:id", component:OrderSuccessComponent, canActivate:[ AuthGuard ]},
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
    ProductService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
