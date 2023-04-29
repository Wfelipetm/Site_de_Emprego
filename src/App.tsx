import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Livre from './pages/livre';
import Entrevistas from 'componente/EntrevistaLista/entrevistaLista';
import Jobs from 'componente/Jobs/jobs';
import NavbarComponent from 'componente/Nav/Nav';
import DadosCadastro from 'componente/Dados/dadosparacadastro';
import TelaLogin from 'componente/TelaLogin/telalogin';
import './App.css';
import useToken from 'componente/login/token';
import EntrevistaDado from 'componente/EntrevistaDado/EntrevistaDado';

function App() {
  const { token } = useToken();

  return (
    <React.StrictMode>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          {token &&
            <Route path='/tec' element={<Entrevistas />} />
          }
          <Route path='/' element={<Home />} />
          <Route path='/livre' element={<Livre />} />
          {/* <Route path='/candidatar' element={<Candidatar />} /> */}
          <Route path="/login2" element={<TelaLogin />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/dadosCad" element={<DadosCadastro />} />
          <Route path="/entrevista/:codigo" element={<EntrevistaDado></EntrevistaDado>} />
          <Route path="/entrevista" element={<EntrevistaDado></EntrevistaDado>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;