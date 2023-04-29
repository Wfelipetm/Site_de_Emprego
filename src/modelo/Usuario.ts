export enum tipoUsuario {
    RH = 1,
    Tech
}

export class Usuario {
    username?:string;
    password?:string;
    nome?: string;
    codigo?: Number;
    tipo?: tipoUsuario;
}
