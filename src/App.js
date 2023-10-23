import { useState } from "react";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

import "./App.css";

function App() {

  const [showCounter, setShowCounter] = useState(true);

  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  return (
    <div>
      <Greeting />
      <hr />
      <p>Bilmiyorum ne haldayım, Reacti öğreniyorum gündüz gece...</p>
      <button
        onClick={toggleCounter}
        className={"btn " + (!showCounter ? "show" : "hide")}
      >
        {showCounter ? "Hide" : "Show"} Counter
      </button>
      {showCounter && <Counter />}
    </div>
  );
}

export default App;
