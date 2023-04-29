import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import './login.css'
import { ControleUsuario } from '../../controle/ControleUsuario';
import useToken from 'componente/login/token';


function LoginModal() {
  const { token, setToken } = useToken();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let controleUsuario = new ControleUsuario();

  const handleLogin = async (e) => {
    e.preventDefault();
    const token = controleUsuario.autenticar(email, password);
    if (token) {
      setToken(token);
      setShowModal(false);
      window.location.replace('/tec');
    } else
      alert('Senha incorreta!');
  }

  const logout = () => {
    setToken(null);
    window.location.replace('/');
  }

  return (
    <div>
      {token ?
        <button className="btn btn-primary btn-login" onClick={() => logout()}>Logout</button> :
        <button className="btn btn-primary btn-login" onClick={() => setShowModal(true)}>Login</button>
      }

      <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Faça login na sua conta</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleLogin}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Endereço de email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Nunca vamos compartilhar seu email com ninguém.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Lembre-se de mim
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setShowModal(false)}>Fechar</button>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </div>
              <div style={{"paddingLeft":"20px"}}>
                <b>PARA QUEM FOR TESTAR</b>
                <p>Usar os usários:</p>
                <li>rh1@email.com</li>
                <li>rh2@email.com</li>
                <li>rh3@email.com</li>
                <li>tech1@email.com</li>
                <li>tech2@email.com</li>
                <li>tech3@email.com</li>
                <p>A senha de todos é 'senha'</p>
                <p>A permissão de RH é TECH são diferentes</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;