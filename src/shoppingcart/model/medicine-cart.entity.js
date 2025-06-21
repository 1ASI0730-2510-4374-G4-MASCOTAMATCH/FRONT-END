export class MedicineCart{
    constructor({
                    id = null,
                    name = '',
                    description = '',
                    quantity = 0
                }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }
}
