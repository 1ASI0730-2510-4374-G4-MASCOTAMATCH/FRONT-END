
export class Historial {
    constructor({
                    id = null,
                    idUsuario = null,
                    idMascota = null,
                    idMedicamento = null
                }) {
        this.id = id;
        this.idUsuario = idUsuario;
        this.idMascota = idMascota;
        this.idMedicamento = idMedicamento;
    }
}