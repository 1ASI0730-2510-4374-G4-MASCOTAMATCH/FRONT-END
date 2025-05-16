
export class UsuarioPlan {
    constructor({
                    id = null,
                    usuarioId = null,
                    planId = null
                }) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.planId = planId;
    }
}