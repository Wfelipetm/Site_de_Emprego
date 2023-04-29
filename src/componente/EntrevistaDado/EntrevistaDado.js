import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ControleEntrevista } from "../../controle/ControleEntrevista";
import { ControleUsuario } from "../../controle/ControleUsuario";
import { Entrevista, statusEntrevista } from "../../modelo/Entrevista";
import moment from 'moment';
import { tipoUsuario } from "../../modelo/Usuario";
import "./EntrevistaDado.css"
import useToken from 'componente/login/token';

function EntrevistaDado() {
    const { token } = useToken();

    let { codigo } = useParams();
    const navigate = useNavigate();

    const controleEntrevista = new ControleEntrevista();
    const controleUsuario = new ControleUsuario();

    const [user] = useState(controleUsuario.recuperarUsuarioUsername(token))

    const [entrevista, setEntrevista] = useState(() => {
        if (codigo)
            return controleEntrevista.recuperarEntrevista(parseInt(codigo))
        else
            return new Entrevista();
    });

    useEffect(() => {
        if (!codigo) {
            setEntrevista({ ...entrevista, responsavelEntrevista: [user.codigo.toString()] })
        }
    }, []);

    let handleChange = (e) => {
        setEntrevista({ ...entrevista, [e.target.name]: e.target.value })
    }

    let handleResponsavelChange = (e) => {
        setEntrevista({ ...entrevista, [e.target.name]: [...e.target.selectedOptions].map(x => parseInt(x.value)) })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        entrevista.dataAgendamento = new Date(entrevista.dataAgendamento)
        if (codigo)
            controleEntrevista.atualizarEntrevista(parseInt(codigo), entrevista);
        else
            controleEntrevista.criarEntrevista(entrevista);

        navigate("/tec");
    }

    const confirmarEntrevista = (event) => {
        event.preventDefault();
        controleEntrevista.confirmarParticipaEntrevista(parseInt(codigo), user.codigo)
        navigate("/tec");
    }

    return (
        <main className="container">
            <form onSubmit={handleFormSubmit} className={"ps-4 pe-4"}>
                <div className="row gx-0 pb-2">
                    <h1>Entrevista</h1>
                </div>

                <div className="row gx-0 pb-2">
                    <label>Nome do Candidato</label>
                    <input disabled={user.tipo !== tipoUsuario.RH} className="form-control" name="nomeCandidato" value={entrevista?.nomeCandidato} onChange={handleChange}></input>
                </div>

                <div className="row gx-0 pb-2">
                    <label>Descrição da vaga</label>
                    <textarea disabled={user.tipo !== tipoUsuario.RH} className="form-control" name="descricaoVaga" value={entrevista?.descricaoVaga} onChange={handleChange}></textarea>
                </div>

                <div className="row gx-0 pb-2">
                    <label>Rede Social</label>
                    <input disabled={user.tipo !== tipoUsuario.RH} className="form-control" name="redeSocial" value={entrevista?.redeSocial} onChange={handleChange}></input>
                </div>

                <div className="row gx-0">
                    <label>Descrição</label>
                    <textarea disabled={user.tipo !== tipoUsuario.RH} className="form-control" name="descricao" value={entrevista?.descricao} onChange={handleChange}></textarea>
                </div>

                <div className="row gx-0">
                    <label>Data de Agendamento</label>
                    <input disabled={user.tipo !== tipoUsuario.RH} type="datetime-local" className="form-control" name="dataAgendamento"
                        value={(moment(entrevista.dataAgendamento)).format('yyyy-MM-DDTHH:mm:ss')} onChange={handleChange}></input>
                </div>

                <div className="row gx-0">
                    <label>Responsáveis pela Entrevista</label>
                    <select
                        disabled={user.tipo !== tipoUsuario.RH}
                        style={{ 'overflow': 'hidden' }}
                        size={controleUsuario.recuperarUsuarios().length}
                        value={entrevista.responsavelEntrevista?.join(",")}
                        onChange={handleResponsavelChange}
                        className="select"
                        name="responsavelEntrevista"
                        multiple>
                        {controleUsuario.recuperarUsuarios().map(x =>
                            x.codigo && x.tipo && <option value={x.codigo.toString()}>{`${x.nome}(${tipoUsuario[x.tipo]})`}</option>
                        )}
                    </select>
                </div>
                <div className="row gx-0">
                    <br></br>
                    <h2>Informações Complementares</h2>
                </div>
                <div className="row gx-0">
                    <label>Confirmaram Entrevista</label>
                    <select disabled
                        style={{ 'overflow': 'hidden' }}
                        size={controleUsuario.recuperarUsuarios().length}
                        value={entrevista.confirmouEntrevista?.join(",")}
                        onChange={handleResponsavelChange}
                        className="select"
                        name="responsavelEntrevista"
                        multiple>
                        {controleUsuario.recuperarUsuarios().map(x =>
                            x.codigo && x.tipo && <option value={x.codigo.toString()}>{`${x.nome}(${tipoUsuario[x.tipo]})`}</option>
                        )}
                    </select>
                </div>

                <div className="row gx-0">
                    <label>Status</label>
                    <input disabled className="form-control" name="status" value={statusEntrevista[entrevista?.status || 0]} onChange={handleChange}></input>
                </div>

                <br></br>

                <div className="row gx-0">
                    {user.tipo === tipoUsuario.RH &&
                        <div className="col-1">
                            <input className="btn btn-secondary" type="submit" value="Salvar Dados"></input>
                        </div>
                    }
                    {codigo &&
                        <div className="col-1">
                            <button type="button" className="btn btn-secondary" onClick={confirmarEntrevista}>Confirmar</button>
                        </div>
                    }
                </div>
            </form>
        </main>
    );
}

export default EntrevistaDado;