import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

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
    <div>
      <h4>Sayaç: {counter}</h4>
      <button onClick={sayacArttir}>+</button>
      <button onClick={sayacAzalt}>-</button>
      <button onClick={sifirla}>Sıfırla</button>
      <button onClick={yuzVerdim}>100</button>
    </div>
  );
};

export default Counter;
