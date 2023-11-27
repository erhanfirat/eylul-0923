import { useContext, useEffect, useReducer, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

import CounterDisplay from "./CounterDisplay";
import { CounterContextObject } from "../context/CounterContext";

const CounterWithCA = ({ start = 0, name = "" }) => {
  const {
    adet,
    setAdet,
    taneFiyat,
    setTaneFiyat,
    toplamFiyat,
    boyut,
    setBoyut,
  } = useContext(CounterContextObject);

  const sayacArttir = () => {
    setAdet(adet + 1);
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

export default CounterWithCA;
