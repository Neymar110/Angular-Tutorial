import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuardService as AdminAuthGuard } from './services/admin-auth-guard.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from 'shared/service/auth-guard.service';
import { CoreModule } from 'app/core/core.module';
import { ShoppingModule } from 'app/shopping/shopping.module';

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  imports: [
    SharedModule,
    ShoppingModule,
    CoreModule,
    RouterModule.forChild([
      {path : "admin/products/new", component:ProductFormComponent, canActivate:[ AuthGuard, AdminAuthGuard ]},
      {path : "admin/products/:id", component:ProductFormComponent, canActivate:[ AuthGuard, AdminAuthGuard ]},
      {path : "admin/products", component:AdminProductsComponent, canActivate:[ AuthGuard, AdminAuthGuard ]},
      {path : "admin/orders", component:AdminOrdersComponent, canActivate:[ AuthGuard, AdminAuthGuard ]}
    ])
  ],
  providers:[
    AdminAuthGuard, 
    AuthGuard
  ]
})
export class AdminModule { }
