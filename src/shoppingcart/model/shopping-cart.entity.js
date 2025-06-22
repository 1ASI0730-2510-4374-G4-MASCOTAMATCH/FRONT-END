import {ShoppingCartItem} from "@/shoppingcart/model/shopping-cart-item.entity.js";

export class ShoppingCart {
    constructor({
                    id = null,
                    ownerId = 0,
                    petId = 0,
                    items = []

                }) {
        this.id = id;
        this.ownerId = ownerId ?? 0;
        this.petId = petId ?? 0;
        this.items = (items ?? []).map(item => new ShoppingCartItem(item));
    }
}
