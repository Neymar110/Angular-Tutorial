import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthGuardService as AuthGuard } from 'shared/service/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { environment } from '../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { ImageUrlValidatorDirective } from './admin/components/product-form/image-url-validator.directive';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { ProductValidatorDirective } from './admin/components/product-form/product-validator.directive';
import { AdminAuthGuardService as AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductValidatorDirective,
    ImageUrlValidatorDirective,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ShoppingModule,
    AdminModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path : "", component:ProductsComponent},
      {path : "login" , component: LoginComponent},      
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    FontAwesomeModule,
    
  ],
  providers: [
    AdminAuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
