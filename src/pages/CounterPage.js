import Counter, { PI, arr } from "../components/Counter";

const CounterPage = () => {
  console.log("arr > ", arr);
  return (
    <div>
      <h1>Counter Page - {PI}</h1>
      <hr />
      <Counter />
    </div>
  );
};

export default CounterPage;
