import { tipoUsuario, Usuario } from "../modelo/Usuario";

let usuarios = new Array<Usuario>(
    {
        codigo: 1,
        nome: "Joana",
        tipo: tipoUsuario.RH,
        username: "rh1@email.com",
        password: "senha"
    },

    {
        codigo: 2,
        nome: "Francisca",
        tipo: tipoUsuario.RH,
        username: "rh2@email.com",
        password: "senha"
    },

    {
        codigo: 3,
        nome: "Matheus",
        tipo: tipoUsuario.RH,
        username: "rh3@email.com",
        password: "senha"
    },

    {
        codigo: 4,
        nome: "Katia",
        tipo: tipoUsuario.Tech,
        username: "tech1@email.com",
        password: "senha"
    },

    {
        codigo: 5,
        nome: "Ana",
        tipo: tipoUsuario.Tech,
        username: "tech2@email.com",
        password: "senha"
    },

    {
        codigo: 6,
        nome: "Pedro",
        tipo: tipoUsuario.Tech,
        username: "tech3@email.com",
        password: "senha"
    }
)

export class ControleUsuario {
    public recuperarUsuarios() {
        return usuarios
    }

    public recuperarUsuarioCodigo(codigo: number) {
        return usuarios.filter(x => x.codigo === codigo)[0];
    }

    public recuperarUsuarioUsername(username: string) {
        return usuarios.filter(x => x.username === username)[0];
    }

    public autenticar(username: string, password: string) {
        let usuario = usuarios.filter(x => x.username === username && x.password === password)[0];
        if (usuario && usuario.username)
            return usuario.username;
    }
}