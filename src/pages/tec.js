import Crud from 'componente/Crud/crud';
import LoginModal from "componente/login/Login";

function Tec() {
  return (
    <div className="usuario-container">
      <LoginModal />
      <Crud />
    </div>
  );
}

export default Tec;