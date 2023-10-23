import { useState } from "react";

function Greeting() {
  const [userName, setUserName] = useState("Anonim");

  return (
    <div>
      <h1>Merhaba Sayın {userName}</h1>
    </div>
  );
}

export default Greeting;
