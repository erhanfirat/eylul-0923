import Button from "./Button";
import Container from "./Container";

const CounterDisplay = ({
  name,
  counter,
  sayacArttir,
  sayacAzalt,
  sifirla,
  yuzVerdim,
}) => {
  return (
    <Container title={"Counter " + name}>
      <h4>Sayaç: {counter}</h4>
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
