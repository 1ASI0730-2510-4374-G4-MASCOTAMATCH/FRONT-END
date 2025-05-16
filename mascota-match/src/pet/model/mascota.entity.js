
export class Mascota {
    constructor({
                    id = null,
                    nombre = '',
                    edad = 0,
                    usuarioId = null
                }) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.usuarioId = usuarioId;
    }
}