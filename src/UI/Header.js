import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header(props) {
  let cartList = useSelector((state) => state.CartList.cartList);
  let total = cartList.reduce((total, item) => {
    return total + item.amount;
  }, 0);
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Day to Day stationary</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/info">
            Ask for Needs
          </Nav.Link>
        </Nav>
      </Container>
      <Button
        variant="info"
        className="justify-content-end m-4"
        onClick={props.onShow}
      >
        Cart <Badge bg="secondary">{total}</Badge>
      </Button>
    </Navbar>
  );
}

export default Header;
