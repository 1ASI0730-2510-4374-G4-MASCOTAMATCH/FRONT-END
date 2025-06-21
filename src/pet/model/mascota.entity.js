
export class Mascota {
    constructor({
                    id = null,
                    name = '',
                    age = 0,
                    breed = '',
                    ownerId = null
                }) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.ownerId = ownerId;
    }
}