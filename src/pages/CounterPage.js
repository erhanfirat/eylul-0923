import Counter, { PI, arr } from "../components/Counter";
import CounterWithCA from "../components/CounterWithCA";

const CounterPage = () => {
  console.log("arr > ", arr);
  return (
    <div>
      <h1>Counter Page with Context API </h1>
      <hr />
      <CounterWithCA />
    </div>
  );
};

export default CounterPage;
