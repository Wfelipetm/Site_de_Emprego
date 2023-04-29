import { Entrevista, statusEntrevista } from "../modelo/Entrevista";

let entrevistas = new Array<Entrevista>(
    {
        codigo: 1,
        nomeCandidato: "Zé",
        descricaoVaga: "Desenvolvedor",
        redeSocial: "linkedin.com/Ze",
        descricao: "O entrevistado está apto para a vaga",
        dataAgendamento: new Date('2023-03-18T09:00:00.000'),
        responsavelEntrevista: [3, 4, 6],
        confirmouEntrevista: [3],
        status: statusEntrevista.Pendente,
        comentarios: [
            {
                autor: 1,
                data: new Date('2023-03-17T10:00:00.000'),
                descricao: "Fazer teste tecnico"
            }
        ]
    },

    {
        codigo: 2,
        nomeCandidato: "João",
        descricaoVaga: "Desenvolvedor",
        redeSocial: "linkedin.com/Joao",
        descricao: "O entrevistado está apto para a vaga",
        dataAgendamento: new Date('2023-03-18T10:00:00.000'),
        responsavelEntrevista: [2, 4, 6],
        status: statusEntrevista.Pendente,
        comentarios: [
            {
                autor: 1,
                data: new Date('2023-03-17T10:00:00.000'),
                descricao: "Fazer teste tecnico"
            }
        ]
    },

    {
        codigo: 3,
        nomeCandidato: "Maria",
        descricaoVaga: "Desenvolvedor",
        redeSocial: "linkedin.com/Maria",
        descricao: "A entrevistada está apta para a vaga",
        dataAgendamento: new Date('2023-03-18T11:00:00.000'),
        responsavelEntrevista: [1, 5, 6],
        status: statusEntrevista.Pendente,
        comentarios: [
            {
                autor: 1,
                data: new Date('2023-03-17T10:00:00.000'),
                descricao: "Fazer teste tecnico"
            }
        ]
    }
)

export class ControleEntrevista {
    public recuperarEntrevistas() {
        return entrevistas
    }

    public recuperarEntrevista(codigo: number) {
        return entrevistas.filter(x => x.codigo === codigo)[0];
    }

    public entrevistasConfirmadas(codigoUsuario: number) {
        return entrevistas.filter(x => x.status === statusEntrevista.Confirmada).sort((a, b) => {
            if (a.dataAgendamento && b.dataAgendamento && a.dataAgendamento > b.dataAgendamento)
                return -1
            else
                return 1
        });
    }

    public minhasEntrevistas(codigoUsuario: number) {
        return entrevistas.filter(x => x.responsavelEntrevista?.includes(codigoUsuario));
    }

    public entrevistasPendentes() {
        return entrevistas.filter(x => x.status === statusEntrevista.Pendente);
    }

    public entrevistasFinalizadas() {
        return entrevistas.filter(x => x.status === statusEntrevista.Finalizada);
    }

    public confirmarParticipaEntrevista(codigoEntrevista: number, codigoUsuario: number) {
        let entrevista = entrevistas.filter(x => x.codigo === codigoEntrevista)[0]

        if (entrevista !== null) {
            if (!entrevista.confirmouEntrevista) {
                entrevista.confirmouEntrevista = new Array<number>;
            } else if (entrevista.confirmouEntrevista?.includes(codigoUsuario)) {
                return
            }

            entrevista.confirmouEntrevista?.push(codigoUsuario)

            if (entrevista.confirmouEntrevista?.length === 2) {
                entrevista.status = statusEntrevista.Confirmada;
            }
        }
    }

    public criarEntrevista(entrevista: Entrevista) {
        let index = Math.max(...entrevistas.map(x => x.codigo || 0));
        entrevista.codigo = index + 1;
        entrevista.status = statusEntrevista.Pendente;
        entrevistas.push(entrevista)
    }

    public atualizarEntrevista(codigo: number, entrevista: Entrevista) {
        let entrevistaOld = entrevistas.filter(x => x.codigo === codigo)[0]
        entrevistaOld.nomeCandidato = entrevista.nomeCandidato;
        entrevistaOld.descricao = entrevista.descricao;
        entrevistaOld.descricaoVaga = entrevista.descricaoVaga;
        entrevistaOld.redeSocial = entrevista.redeSocial;
        entrevistaOld.responsavelEntrevista = entrevista.responsavelEntrevista;
        entrevistaOld.dataAgendamento = entrevista.dataAgendamento;
    }

    public finalizarEntrevista(codigo: number) {
        let entrevista = entrevistas.filter(x => x.codigo === codigo)[0]
        if (entrevista !== null) {
            if (entrevista.status === statusEntrevista.Confirmada) {
                entrevista.status = statusEntrevista.Finalizada
            }
        }
    }
}
