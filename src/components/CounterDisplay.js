import { useEffect } from "react";
import Container from "./Container";
import { Button } from "react-bootstrap";

const CounterDisplay = ({
  name,
  counter,
  sayacArttir,
  sayacAzalt,
  sifirla,
  yuzVerdim,
  fiyat,
}) => {
  useEffect(() => {
    // console.warn("Fiyat güncellendi!");
  }, [fiyat]);

  return (
    <Container title={"Yumurta Sepeti " + name}>
      <h4>Adet: {counter}</h4>
      <h4>Fiyat: {fiyat}</h4>
      <Button onClick={sayacArttir} className="me-2">
        <i className="fa-solid fa-plus" />
        Arttır
      </Button>
      <Button onClick={sayacAzalt} className="me-2">
        <i className="fa-solid fa-minus" />
        Azalt
      </Button>
      <Button onClick={sifirla} className="me-2">
        <i className="fa-solid fa-refresh" />
        Sıfırla
      </Button>
      <Button onClick={yuzVerdim}>100</Button>
    </Container>
  );
};

export default CounterDisplay;
