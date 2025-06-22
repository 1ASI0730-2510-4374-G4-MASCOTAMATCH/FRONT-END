export class Payment {
    constructor({ id = null, usuarioId, planId, monto, metodo, fecha }) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.planId = planId;
        this.monto = monto;
        this.metodo = metodo;
        this.fecha = fecha;
    }
}
