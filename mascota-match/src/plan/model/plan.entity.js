
export class Plan {
    constructor({
                    id = null,
                    name = '',
                    imgUrl = '',
                    description = ''

                }) {
        this.id = id;
        this.name = name;
        this.imgUrl = imgUrl;
        this.description = description;
    }
}