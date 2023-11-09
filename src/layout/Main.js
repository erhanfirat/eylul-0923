import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import Sidebar from "./Sidebar";
import PageContent from "./PageContent";
import Footer from "./Footer";
import { useState } from "react";

const Main = ({ productList, fetchProducts }) => {
  const [siparisFormData, setSiparisFormData] = useState(null);
  return (
    <>
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
    </>
  );
};

export default Main;
