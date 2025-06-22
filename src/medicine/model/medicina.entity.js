export class Medicina {
    constructor({
                    id = null,
                    name = '',
                    description = '',
                    price = 0
                }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
