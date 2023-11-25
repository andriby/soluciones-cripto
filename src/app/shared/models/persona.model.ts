import { Usuario } from "./usuario.model";

export class Persona{
    id_cedula: number;
    nombre: string;
    apellido: string;
    correo: string;
    direccion: string;
    telefono: number;
    f_nacimiento: Date;
    cuentaB: number;

    constructor(id_cedula: number, nombre: string, apellido: string, correo: string, direccion: string, telefono: number, f_nacimiento: Date, cuentaB: number) {

        this.id_cedula = id_cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.direccion = direccion;
        this.telefono = telefono;
        this.f_nacimiento = f_nacimiento;
        this.cuentaB = cuentaB;
        
    }

    registro(){
        
    }
}