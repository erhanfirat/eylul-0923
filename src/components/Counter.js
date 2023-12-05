import { useEffect, useReducer, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

import CounterDisplay from "./CounterDisplay";

// const action = {
//   type: "", // action tipi
//   payload: "", // herhangi bir data
// };

const adetReducer = (state, action) => {
  if (action.type === "arttir") {
    return state + 1;
  } else if (action.type === "azalt") {
    return state - 1 >= 0 ? state - 1 : state;
  } else if (action.type === "sifirla") {
    return 0;
  } else if (action.type === "yuz-verdim") {
    return 100;
  } else {
    return state;
  }
};

const Counter = ({ start = 0, name = "" }) => {
  const [adet, dispatchAdet] = useReducer(adetReducer, start);

  const [taneFiyat, setTaneFiyat] = useState(15); // immutable
  const [toplamFiyat, setToplamFiyat] = useState(start * taneFiyat);
  const [boyut, setBoyut] = useState("sm"); // sm, md, lg

  const sayacArttir = () => {
    dispatchAdet({ type: "arttir" });
  };

  const sayacAzalt = () => {
    dispatchAdet({ type: "azalt" });
  };

  const sifirla = () => {
    dispatchAdet({ type: "sifirla" });
  };

  const yuzVerdim = () => {
    dispatchAdet({ type: "yuz-verdim" });
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

  // useEffect(() => {
  //   setTaneFiyat(taneFiyat);
  // }, [taneFiyat]);

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

  const counterProps = {
    name: name,
    counter: adet,
    sayacArttir: sayacArttir,
    sayacAzalt: sayacAzalt,
    sifirla: sifirla,
    yuzVerdim: yuzVerdim,
    fiyat: toplamFiyat,
  };

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
      <Form.Group
        as={Row}
        className="mb-3"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label column sm="2">
          Yumurta Adet Fiyatı
        </Form.Label>
        <Col sm="4">
          <Form.Control
            type="number"
            onChange={(e) => setTaneFiyat(Number(e.target.value))}
            value={taneFiyat}
          />
        </Col>
        <Col sm="6">
          <Form.Select
            onChange={(e) => setBoyut(e.target.value)}
            value={boyut}
            data-cy="yumurta-ebat-select"
          >
            <option value={"sm"}>Küçük</option>
            <option value={"md"}>Orta</option>
            <option value={"lg"}>Büyük</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <CounterDisplay {...counterProps} />
    </>
  );
};
// sadece 1 tane nesne default export edilebilir
export default Counter;

export const PI = 3.141516;

export const arr = [1, 3, 5, 7, 9];
