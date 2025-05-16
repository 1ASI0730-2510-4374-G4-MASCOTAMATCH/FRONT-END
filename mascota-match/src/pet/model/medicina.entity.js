
export class Medicina {
    constructor({
                    id = null,
                    nombre = '',
                    descripcion = ''
                }) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}