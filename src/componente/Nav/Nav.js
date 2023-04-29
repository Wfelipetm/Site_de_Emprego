import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';


function NavbarComponent() {
  

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav.Link href="/login2">Vagas</Nav.Link>
          <Nav.Link href="/usuario">Sou Empresa</Nav.Link>
        
           
        
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;