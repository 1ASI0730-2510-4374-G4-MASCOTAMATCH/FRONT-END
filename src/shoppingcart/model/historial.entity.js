import {ShoppingCartItem} from "@/shoppingcart/model/shopping-cart-item.entity.js";
import {MedicineCart} from "@/shoppingcart/model/medicine-cart.entity.js";

export class Historial {
    constructor({
                    id = null,
                    petName = "",
                    petAge = 0,
                    shoppingCartItemOut = []
                }) {
        this.id = id;
        this.petName = petName;
        this.petAge = petAge;
        this.items = shoppingCartItemOut.map(item => new MedicineCart(item));
    }
}