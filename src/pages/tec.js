import Crud from 'componente/Crud/crud';
import LoginModal from "componente/login/Login";

function Tec() {
    return (
      <div className="usuario-container">
       <Crud/>
       <LoginModal />
      </div>
    );
  }
  
  export default Tec;