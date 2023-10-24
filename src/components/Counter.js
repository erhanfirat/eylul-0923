import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = ({ start = 0, name = "" }) => {
  const [counter, setCounter] = useState(start);

  const sayacArttir = () => {
    setCounter(counter + 1);
  };

  const sayacAzalt = () => {
    setCounter(counter - 1);
  };

  const sifirla = () => {
    setCounter(0);
  };

  const yuzVerdim = () => {
    setCounter(100);
  };

  return (
    <CounterDisplay
      name={name}
      counter={counter}
      sayacArttir={sayacArttir}
      sayacAzalt={sayacAzalt}
      sifirla={sifirla}
      yuzVerdim={yuzVerdim}
    />
  );
};
// sadece 1 tane nesne default export edilebilir
export default Counter;

export const PI = 3.141516;

export const arr = [1, 3, 5, 7, 9];
