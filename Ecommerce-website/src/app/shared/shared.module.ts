import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableModule } from '@angular/material/table';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { CategoryService } from './service/category.service';
import { OrderService } from './service/order.service';
import { ProductService } from './service/product.service';
import { ShoppingCartService } from './service/shopping-cart.service';
import { UserService } from './service/user.service';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    ProductCardComponent,
    ProductQuantityComponent,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers:[
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
