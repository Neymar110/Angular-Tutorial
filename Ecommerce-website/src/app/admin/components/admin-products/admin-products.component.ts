import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'shared/service/product.service';
import { Product } from 'shared/models/product';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy{
  products:Product[];
  filteredProducts: any[];
  subscription : Subscription;

  // dataSource: MatTableDataSource<ProductModel>;
  displayedColumns: string[] = ['title', 'price', 'a'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService :  ProductService) {
    this.subscription = this.productService.getAll().subscribe(data => {
      this.filteredProducts = data.map(x => {
       return {
         key: x.payload.key,
         ...x.payload.val() as Product
       }        
      })

      // this.dataSource = new MatTableDataSource(this.filteredProducts);
      // this.dataSource.paginator = this.paginator;
    });
  }

  filter(query:string){
    this.filteredProducts = (query)?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :this.products;
      
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
