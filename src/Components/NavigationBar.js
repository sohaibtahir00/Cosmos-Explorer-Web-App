import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Adding navigation bar to page
const NavigationBar = () => { 
  return (
        <Navbar bg="primary" data-bs-theme="dark"> 
          <Container>
            <Navbar.Brand href="/">Cosmos Explorer</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};
export default NavigationBar;