import { Persona } from "./persona.model";
import { Referido } from "./referido.model";

export class Usuario extends Persona{
    id_usuario: number;
    password: string;
    codigo_ref: string;
    esReferido: boolean;
    id_referido: Referido
    referidoPorUser?: Usuario;
    lstReferidos?: Referido[]

    constructor(id_cedula: number, nombre: string, apellido: string, correo: string, direccion: string, telefono: number, f_nacimiento: Date, cuentaB: number, id_usuario: number, password: string, codigo_ref: string, id_referido: Referido, esReferido: boolean, referidoPorUser: Usuario, lstReferidos: Referido[]) {

        super(id_cedula, nombre, apellido, correo, direccion, telefono, f_nacimiento, cuentaB);
        this.id_usuario = id_usuario;
        this.password = password;
        this.codigo_ref = codigo_ref;
        this.esReferido = esReferido;
        this.id_referido = id_referido;
        this.referidoPorUser = referidoPorUser;
        this.lstReferidos = lstReferidos;

    }

    verificarContraseña(){

    }

    reestablecerContraseña(){

    }

    referirA(){
        
    }

}