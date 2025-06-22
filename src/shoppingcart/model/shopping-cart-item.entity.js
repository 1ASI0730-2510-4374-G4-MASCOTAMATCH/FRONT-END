export class ShoppingCartItem {
    constructor({
                    medicationId = 0,
                    quantity = 0
                }) {
        this.medicationId = medicationId ?? 0;
        this.quantity = quantity ?? 0;
    }
}