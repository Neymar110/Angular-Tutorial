import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db : AngularFireDatabase) { }

  getCategories() {
    // Getting the values in the categories object in the database
    // Also misspelled category in the database, thus the caregory >_<
    return this.db.list("/caregories", x => x.orderByChild("name")).snapshotChanges();
  }
}