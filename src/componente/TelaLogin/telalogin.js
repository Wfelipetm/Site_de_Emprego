import React, { useState } from "react"
import'./telalogin.css'


 function TelaLogin(props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Cadastre-se </h3>
            <div className="text-center">
            </div>
            <div className="form-group mt-3">
              <label>Email Usuario</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Entre com seu email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Senha</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Digite sua senha "
              />
            </div>
            <div className="d-grid gap-2 mt-3">
            <a class="btn btn-primary" href="/dadosCad" role="button">Enviar</a>
            </div>
          </div>
        </form>
      </div>
    )
  }

  return (
    
  <></>
  )
}
export default TelaLogin;