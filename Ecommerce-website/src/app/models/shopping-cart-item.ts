import { Product } from "./product";

export class ShoppingCartItem {
    title : string;
    imageUrl:string ;
    product : Product;
    quantity : number;
    price: number;
    $key:string;
}