import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import Sidebar from "./Sidebar";
import PageContent from "./PageContent";
import Footer from "./Footer";
import { useContext, useState } from "react";
import { GlobalContextObject } from "../context/GlobalContext";

const Main = ({ productList, fetchProducts }) => {
  const [siparisFormData, setSiparisFormData] = useState(null);
  // const { theme, setTheme, language, setLanguage } = useContext(GlobalContextObject);

  return (
    <GlobalContextObject.Consumer>
      {({ theme, setTheme, language, setLanguage }) => {
        console.log("value > ", theme);
        return (
          <div className={theme} data-lang={language}>
            <Header />
            <Container fluid>
              <Row>
                <Col lg="3" md="3" sm="12">
                  <Sidebar siparisFormData={siparisFormData} />
                </Col>
                <Col lg="9" md="9" sm="12">
                  <PageContent
                    productList={productList}
                    fetchProducts={fetchProducts}
                    setSiparisFormData={setSiparisFormData}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Footer />
                </Col>
              </Row>
            </Container>
          </div>
        );
      }}
    </GlobalContextObject.Consumer>
  );
};

export default Main;
