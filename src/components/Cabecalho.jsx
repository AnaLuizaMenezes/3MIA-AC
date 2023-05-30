import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Cabecalho() {
  return (
    <>
     
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/Padaria FruFru.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Padaria FruFru
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Cabecalho;