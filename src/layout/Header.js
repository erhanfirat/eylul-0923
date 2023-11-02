import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Eylül!</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/" exact>
            Ana Sayfa
          </NavLink>
          <NavLink id="yumura-sepeti-link" className="nav-link" to="/counter">
            Yumurta Sepeti
          </NavLink>
          <NavLink className="nav-link" to="/products">
            Ürünler
          </NavLink>
          <NavLink
            id="yeni-urun-link"
            className="nav-link"
            to="/create-product"
          >
            <i className="fa-solid fa-plus me-2" />
            Ürün Oluştur
          </NavLink>
          <NavLink className="nav-link" to="/about-us">
            Hakkımızda
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
