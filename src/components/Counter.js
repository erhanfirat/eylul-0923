import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = ({ start = 0, name = "" }) => {
  const [adet, setAdet] = useState(start);
  const [taneFiyat, setTaneFiyat] = useState(15);
  const [toplamFiyat, setToplamFiyat] = useState(start * taneFiyat);
  const [boyut, setBoyut] = useState("sm"); // sm, md, lg

  const sayacArttir = () => {
    // adet 10
    setAdet(adet + 1);
    // adet 10
  };

  const sayacAzalt = () => {
    setAdet(adet - 1);
  };

  const sifirla = () => {
    setAdet(0);
  };

  const yuzVerdim = () => {
    setAdet(100);
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

  // component load - componentDidMount
  useEffect(() => {
    console.log(
      name +
        " componenti Did Mount oldu! yani yüklendi, yaani browsera monte edildi"
    );

    // component Will Unmount - component silindi - component ekrandan kaldırıldı
    return () => {
      console.log(
        name +
          " componenti will Unmount! yani silinmek üzere, yaani browserdan kaldırılacak"
      );
    };
  }, []);

  // component update - componentDidUpdate - component rerender
  useEffect(() => {
    console.log(
      name +
        " componenti güncellendi! component did update oldu, yani rerender oldu."
    );
  });

  useEffect(() => {
    console.log("Adet statei değişti: ", adet);

    return () => {
      console.log("Adet değeri değişecek: ", adet);
    };
  }, [adet]);

  return (
    <>
      <label>
        Yumurta Tane Fiyatı
        <input
          type="number"
          onChange={(e) => setTaneFiyat(Number(e.target.value))}
          value={taneFiyat}
        />
      </label>
      <label>
        <select onChange={(e) => setBoyut(e.target.value)} value={boyut}>
          <option value={"sm"}>Küçük</option>
          <option value={"md"}>Orta</option>
          <option value={"lg"}>Büyük</option>
        </select>
      </label>
      <CounterDisplay
        name={name}
        counter={adet}
        sayacArttir={sayacArttir}
        sayacAzalt={sayacAzalt}
        sifirla={sifirla}
        yuzVerdim={yuzVerdim}
        fiyat={toplamFiyat}
      />
    </>
  );
};
// sadece 1 tane nesne default export edilebilir
export default Counter;

export const PI = 3.141516;

export const arr = [1, 3, 5, 7, 9];
