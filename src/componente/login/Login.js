import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import  { useState } from 'react';
import './login.css'




function LoginModal() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar sua lógica de autenticação
    if (password === '1') {
      // Se a senha estiver correta, redireciona o usuário para outra rota
      window.location.replace('/tec');
    } else {
      alert('Senha incorreta!');
    }
  };

  return (
    <div>
      <button className="btn btn-primary btn-login" onClick={() => setShowModal(true)}>Login</button>
      
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;