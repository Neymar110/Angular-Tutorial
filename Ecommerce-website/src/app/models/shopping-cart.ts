import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart{
  items: ShoppingCartItem[] = [];
    constructor(private itemsMap : { [productId : string]: ShoppingCartItem }) {
      for (let productId in itemsMap){
        let item = itemsMap[productId]
        this.items.push(new ShoppingCartItem({...item, $key : productId}));
      }
    }

    get totalItemsCount() {
        let count = 0;
        console.log(this.itemsMap)
        for (let productId in this.itemsMap){
          count += this.itemsMap[productId].quantity
        }
          
        
        console.log(count);
        
        return count;
    }

}