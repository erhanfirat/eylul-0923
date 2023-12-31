import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { renewAxiosInstance } from "../api/api";

const Header = () => {
  const productReduxTitle = useSelector((store) => store.product.title);
  const productTotal = useSelector((store) => store.product.total);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const userLogout = () => {
    localStorage.removeItem("token");
    dispatch({
      type: "SET_USER_NAME",
      payload: null,
    });
    dispatch({
      type: "SET_USER_EMAIL",
      payload: null,
    });
    renewAxiosInstance();
  };

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
          <NavLink className="nav-link" to="/products-redux">
            {productReduxTitle} [{productTotal}]
          </NavLink>
          <NavLink className="nav-link" to="/students">
            Öğrenciler
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
          {!user.name && (
            <NavLink className="nav-link" to="/login">
              Giriş
            </NavLink>
          )}
          {user.name && (
            <>
              <NavLink className="nav-link" to="/my-account">
                {user.name}
              </NavLink>
              <Button onClick={userLogout}>Çıkış</Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
