// External JS
import { useState } from "react";
// Internal JS
import Counter, { PI, arr } from "./components/Counter";
import Greeting from "./components/Greeting";
// CSS
import "./App.css";
import Container from "./components/Container";

console.log("PI, arr : ", PI, arr);

function App() {
  const [showCounter, setShowCounter] = useState(true);
  const [user, setUser] = useState({ name: "Anonim", email: "" });

  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  return (
    <div>
      <Greeting userName={user.name} language="tr" />
      <hr />
      <p>Bilmiyorum ne haldayım, Reacti öğreniyorum gündüz gece...</p>
      <button
        onClick={toggleCounter}
        className={"btn " + (!showCounter ? "show" : "hide")}
      >
        {showCounter ? "Hide" : "Show"} Counter
      </button>
      {showCounter && <Counter name="bir" />}
      {showCounter && <Counter name="iki" start={50} />}
      {showCounter && <Counter name="üç" start={250} />}
    </div>
  );
}

export default App;
