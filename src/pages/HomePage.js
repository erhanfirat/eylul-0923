import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { source } from "../sources/sources";

const MeyveList = ["muz", "erik", "elma", "kayısı"];

const HomePage = () => {
  const [email, setEmail] = useState("a@a.com");
  const [password, setPassword] = useState("123");
  const [remember, setRemember] = useState(false);
  const [meyveler, setMeyveler] = useState([]);
  // ["muz", "erik"]
  const [meyveler2, setMeyveler2] = useState(() => {
    const meyveInitial = {};
    MeyveList.forEach((meyve) => {
      meyveInitial[meyve] = false;
    });
    console.log("meyveInitial > ", meyveInitial);
    return meyveInitial;
  });
  const { language } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const meyveSelect = (e, meyve) => {
    // seçili
    if (e.target.checked) {
      if (meyveler.length < 2) {
        setMeyveler([...meyveler, meyve]);
      } else {
        console.error("Yeni bir meyve seçemezsiniz.");
      }
    }
    // seçisiz
    else {
      setMeyveler(meyveler.filter((m) => m !== meyve));
    }
  };

  const meyveSelect2 = (e, meyve) => {
    // seçili
    if (e.target.checked) {
      // Object.keys(meyveler2) > ["muz", "erik", "elma"];
      // Object.values(meyveler2) > [false, false, true, false];
      const seciliMeyveSayisi = Object.values(meyveler2).filter(
        (m) => m
      ).length;
      if (seciliMeyveSayisi >= 2) return;
    }
    // seçisiz

    setMeyveler2({ ...meyveler2, [meyve]: e.target.checked });
  };

  useEffect(() => {
    console.log("meyveler güncellendi: ", meyveler);
  }, [meyveler]);

  useEffect(() => {
    console.log("Ana sayfa did mount!");
  }, []);

  return (
    <div>
      <h1>{source[language].homePageHeader}</h1>
      <button onClick={() => dispatch({ type: "CHANGE_LANG", payload: "en" })}>
        En
      </button>
      <button onClick={() => dispatch({ type: "CHANGE_LANG", payload: "tr" })}>
        Tr
      </button>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae omnis
        animi beatae deleniti tempora deserunt ullam. Enim, modi odio officiis
        sit at, neque dignissimos voluptas, cupiditate excepturi esse suscipit!
        Eos?
      </p>
      <p>
        Tempora deserunt ullam. Enim, modi odio officiis sit at, neque
        dignissimos voluptas, cupiditate excepturi esse suscipit! Eos? tempora
        deserunt ullam. Enim, modi odio officiis sit at, neque dignissimos
        voluptas, cupiditate excepturi esse suscipit! Eos?Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Quae omnis animi beatae deleniti
        tempora deserunt ullam. Enim, modi odio officiis sit at, neque
        dignissimos voluptas, cupiditate excepturi esse suscipit! Eos?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae omnis
        animi beatae deleniti tempora deserunt ullam.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="user-mail">
          Email
          <input
            id="user-mail"
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>

        <label>
          Password
          <input
            id="user-pass"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        {/* Controlled Component ? */}

        <label>
          remember me
          <input
            type="checkbox"
            name="remember"
            onChange={(e) => {
              setRemember(e.target.checked);
            }}
          />
        </label>

        <div>
          Obje Formu
          {MeyveList.map((meyve) => (
            <label key={meyve}>
              {meyve}
              <input
                type="checkbox"
                name="meyveler2"
                onChange={(e) => meyveSelect2(e, meyve)}
                checked={meyveler2[meyve]}
              />
            </label>
          ))}
        </div>

        <div>
          Array Formu
          {MeyveList.map((meyve) => (
            <label key={meyve}>
              {meyve}
              <input
                type="checkbox"
                name="meyveler"
                onChange={(e) => meyveSelect(e, meyve)}
                checked={meyveler.includes(meyve)}
              />
            </label>
          ))}
        </div>

        <button type="submit">Login</button>
        <button
          type="button"
          onClick={() => {
            setEmail("");
            setPassword("");
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};
const newURL =
  "http://localhost:3000/?email=erhanfirat%40gmail.com & password=111111";

export default HomePage;
