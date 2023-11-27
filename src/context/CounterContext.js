import { createContext, useEffect, useState } from "react";

export const CounterContextObject = createContext();

export const CounterContextProvider = ({ children }) => {
  const [adet, setAdet] = useState(0);
  const [taneFiyat, setTaneFiyat] = useState(15);
  const [toplamFiyat, setToplamFiyat] = useState(adet * taneFiyat);
  const [boyut, setBoyut] = useState("sm"); // sm, md, lg

  const contextObject = {
    adet,
    setAdet,
    taneFiyat,
    setTaneFiyat,
    toplamFiyat,
    setToplamFiyat,
    boyut,
    setBoyut,
  };

  useEffect(() => {
    if (boyut === "sm") {
      setToplamFiyat(adet * taneFiyat * 0.8);
    } else if (boyut === "lg") {
      setToplamFiyat(adet * taneFiyat * 1.2);
    } else {
      setToplamFiyat(adet * taneFiyat);
    }
  }, [adet, taneFiyat, boyut]);

  return (
    <CounterContextObject.Provider value={contextObject}>
      {children}
    </CounterContextObject.Provider>
  );
};
