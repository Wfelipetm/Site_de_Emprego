import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import useToken from 'componente/login/token';

function NavbarComponent() {
  const { token } = useToken();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav.Link href="/dadosCad">Candidatar</Nav.Link>
          {token &&
            <>
              <Nav.Link href="/tec">Area Logada</Nav.Link>
            </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;