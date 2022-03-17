import { Product } from "./product";

export class ShoppingCartItem {
    title : string;
    imageUrl:string ;
    product : Product;
    quantity : number;
    price: number;
    $key:string;

    get totalPrice(){
        return this.price * this.quantity
    }

    constructor(init?:Partial<ShoppingCartItem>){
        Object.assign(this, init);
    }
    
    
    
}