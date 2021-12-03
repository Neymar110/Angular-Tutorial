import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private db : AngularFireDatabase) { }

  create(product : object) {
    // This pushes the object into the firebase database
    return this.db.list("/products").push(product);
  }

  getAll(){
    return this.db.list("/products");
  }
}
