import { Usuario } from "./usuario.model";

export class Referido  {
    id_referido: string;
    fechaReferido: Date;
    referidoPorUsuario: Usuario;

    constructor(id_referido: string, fechaReferido: Date, referidoPorUsuario: Usuario) {
        this.id_referido = id_referido;
        this.fechaReferido = fechaReferido;
        this.referidoPorUsuario = referidoPorUsuario;
    }

    referidoPor(){

    }
}
