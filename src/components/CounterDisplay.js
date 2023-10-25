import { useEffect } from "react";
import Button from "./Button";
import Container from "./Container";

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
      <Button btnClick={sayacArttir}>
        <i className="fa-solid fa-plus" />
        Arttır
      </Button>
      <Button btnClick={sayacAzalt}>
        <i className="fa-solid fa-minus" />
        Azalt
      </Button>
      <Button btnClick={sifirla}>
        <i className="fa-solid fa-refresh" />
        Sıfırla
      </Button>
      <Button btnClick={yuzVerdim}>100</Button>
    </Container>
  );
};

export default CounterDisplay;
