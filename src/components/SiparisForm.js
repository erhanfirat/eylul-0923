import { useEffect, useState } from "react";

const SiparisForm = ({ setSiparisFormData }) => {
  const [fiyat, setFiyat] = useState(0);

  const [yiyecek, setYiyecek] = useState(0);
  const [adet, setAdet] = useState(0);
  const [icecek, setIcecek] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    setSiparisFormData({ yiyecek, adet, icecek });
  };

  useEffect(() => {
    setFiyat(yiyecek * adet + icecek);
  }, [yiyecek, adet, icecek]);

  // component did update
  useEffect(() => {
    console.log("SiparisForm componenti rerender oldu");
  });

  return (
    <form onSubmit={submitHandler}>
      <div>
        <select
          name="yiyecek"
          onChange={(e) => setYiyecek(Number(e.target.value))}
        >
          <option value={20}>Simit</option>
          <option value={25}>Peynirli Poğaça</option>
          <option value={28}>Patatesli Poğaça</option>
          <option value={30}>Kaşarlı Poğaça</option>
        </select>
      </div>
      <div>
        <label>
          Adet:{" "}
          <input
            name="adet"
            type="number"
            onChange={(e) => setAdet(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <select
          name="icecek"
          onChange={(e) => setIcecek(Number(e.target.value))}
        >
          <option value={0}>İçecek istemiyorum</option>
          <option value={15}>Ayran 20ml</option>
          <option value={22}>Ayran 30ml</option>
          <option value={25}>Meyve Suyu</option>
        </select>
      </div>
      <div>
        <p>Toplam Fiyat: {yiyecek * adet + icecek}</p>
      </div>
      <div>
        <button type="submit">Sipariş Oluştur</button>
      </div>
    </form>
  );
};

export default SiparisForm;
