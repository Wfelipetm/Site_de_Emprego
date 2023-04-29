import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Livre from './pages/livre';
import Usuario from './pages/usuario';
import Crud from 'componente/Crud/crud';
import Jobs from 'componente/Jobs/jobs';
import NavbarComponent from 'componente/Nav/Nav';
import DadosCadastro from 'componente/Dados/dadosparacadastro';

import TelaLogin from 'componente/TelaLogin/telalogin';


import './App.css';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
      <NavbarComponent />
         
          
     

        <Routes>
          <Route path='/tec' element={<Crud />} />
          <Route  path='/' element={<Home />} />
          <Route path='/livre' element={<Livre />} />
          <Route path='/usuario' element={<Usuario />} />
          <Route path="/login2" element={<TelaLogin/>} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path="/dadosCad" element={<DadosCadastro/>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;