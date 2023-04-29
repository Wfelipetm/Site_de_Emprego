import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from 'componente/Footer/footer';
import { ControleUsuario } from '../../controle/ControleUsuario'
import { ControleEntrevista } from '../../controle/ControleEntrevista'
import { statusEntrevista } from '../../modelo/Entrevista'
import { tipoUsuario } from '../../modelo/Usuario'
import { Link } from "react-router-dom"
import "./entrevistaLista.css"
import useToken from 'componente/login/token';

function Entrevistas() {
  const { token } = useToken();

  const controleUsuario = new ControleUsuario();
  const controleEntrevista = new ControleEntrevista();

  const [entrevistas, setEntrevistas] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const [filtroAtivo, setFiltroAtivo] = useState("todas");

  const [user] = useState(controleUsuario.recuperarUsuarioUsername(token))

  useEffect(() => {
    setEntrevistas(controleEntrevista.entrevistasConfirmadas());
    setFiltroAtivo("confirmadas")
    setCarregado(true);
  }, [carregado]);

  const confirmarEntrevista = (codigo) => {
    controleEntrevista.confirmarParticipaEntrevista(codigo, user.codigo)
    setCarregado(false);
  }

  const todasEntrevistas = () => {
    setFiltroAtivo("todas")
    setEntrevistas(controleEntrevista.recuperarEntrevistas())
  }

  const entrevistasConfirmadas = () => {
    setFiltroAtivo("confirmadas")
    setEntrevistas(controleEntrevista.entrevistasConfirmadas())
  }

  const minhasEntrevistas = () => {
    setFiltroAtivo("minhas")
    setEntrevistas(controleEntrevista.minhasEntrevistas(user.codigo))
  }

  const entrevistasPendentes = () => {
    setFiltroAtivo("pendentes")
    setEntrevistas(controleEntrevista.entrevistasPendentes())
  }

  const entrevistasFinalizadas = () => {
    setFiltroAtivo("finalizadas")
    setEntrevistas(controleEntrevista.entrevistasFinalizadas())
  }

  const finalizarEntrevista = (codigo) => {
    controleEntrevista.finalizarEntrevista(codigo)
    setCarregado(false);
  }

  function LinhaEntrevista(props) {
    let responsaveis = props.responsavelEntrevista?.map(x => {
      let user = controleUsuario.recuperarUsuarioCodigo(x)
      if (user.tipo)
        return `${user.nome}(${tipoUsuario[user.tipo]})`
      else
        return user.nome
    })

    return <tr>
      <td>{props.nomeCandidato} <br /></td>
      <td>{props.descricaoVaga}</td>
      <td>{responsaveis?.join(", ")}</td>
      <td>{props.dataAgendamento?.toLocaleString()}</td>
      <td>{props.confirmouEntrevista?.length}</td>
      {props.status ?
        <td>{statusEntrevista[props.status]}</td> :
        <td></td>
      }
      <td>
        <Link to={"/entrevista/" + props.codigo}>
          <button className="btn btn-secondary">Consultar</button>
        </Link>
        <button className="btn btn-secondary" onClick={() => confirmarEntrevista(props.codigo)}>Confirmar</button>
        {user.tipo === tipoUsuario.RH &&
          <button className="btn btn-secondary" onClick={() => finalizarEntrevista(props.codigo)}>Finalizar</button>
        }
      </td>
    </tr>;
  }

  return (
    <>
      <div className="container">
        <main>
          {user.tipo === tipoUsuario.RH &&
            <Link to={"/entrevista"}>
              <button className="btn btn-secondary">Nova Entrevista</button>
            </Link>
          }
          <h4>Filtros:</h4>
          <button className={filtroAtivo == "confirmadas" ? "btn btn-secondary" : "btn btn-dark"} onClick={entrevistasConfirmadas}>
            Confirmadas
          </button>
          <button className={filtroAtivo == "todas" ? "btn btn-secondary" : "btn btn-dark"} onClick={todasEntrevistas}>
            Todas as Entrevistas
          </button>
          <button className={filtroAtivo == "minhas" ? "btn btn-secondary" : "btn btn-dark"} onClick={minhasEntrevistas}>
            Minhas Entrevistas
          </button>
          <button className={filtroAtivo == "pendentes" ? "btn btn-secondary" : "btn btn-dark"} onClick={entrevistasPendentes}>
            Pendentes
          </button>
          <button className={filtroAtivo == "finalizadas" ? "btn btn-secondary" : "btn btn-dark"} onClick={entrevistasFinalizadas}>
            Finalizadas
          </button>
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Candidato</th>
                <th>Vaga</th>
                <th>Responsaveis</th>
                <th>Data Agendamento</th>
                <th>Confirmaram?</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {carregado && entrevistas.map(x => LinhaEntrevista(x))}
            </tbody>
          </table>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Entrevistas;