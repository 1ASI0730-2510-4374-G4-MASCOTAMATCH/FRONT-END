
export class Usuario {
    constructor({
                    id = null,
                    nombre = '',
                    email = '',
                    password = ''
                }) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}