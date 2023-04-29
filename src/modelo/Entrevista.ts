import { Comentario } from "./Comentario";

export enum statusEntrevista{
    Pendente = 1, 
    Confirmada,
    Finalizada
}

export class Entrevista {
    codigo?: number;
    nomeCandidato?: string;
    descricaoVaga?: string;
    redeSocial?: string;
    descricao?: string;
    dataAgendamento?: Date;
    responsavelEntrevista?: Array<number>;
    confirmouEntrevista?: Array<number>;
    anexo?: object;
    status?: statusEntrevista;
    comentarios?: Array<Comentario>;
}
