
export class Plan {
    constructor({
                    id = null,
                    name = '',
                    price = 0,
                    description = '',
                    planId = null,

                }) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.planId = planId;
    }
}