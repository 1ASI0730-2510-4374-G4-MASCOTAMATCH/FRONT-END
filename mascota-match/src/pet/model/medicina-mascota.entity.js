
export class MedicinaMascota{
    constructor({
                    id = null,
                    nombre = '',
                    descripcion = '',
                    idUsuario = null,
                    idMascota = null,
                    idMedicina= null,
                    cantidad = 0
                }) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.idUsuario = idUsuario;
        this.idMascota = idMascota;
        this.idMedicina = idMedicina;
        this.cantidad = cantidad;
    }
}