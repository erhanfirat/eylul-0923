import { Button } from "react-bootstrap";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { AxiosInstance } from "../api/api";
import { useLocation, useHistory } from "react-router-dom";

const LoginPage = () => {
  const [name, nameHandler] = useInput();
  const [email, emailHandler] = useInput();
  const [pass, passHandler] = useInput();

  const location = useLocation();
  const history = useHistory();

  console.log("Login location: ", location);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ email, pass });

    AxiosInstance.post("https://reqres.in/api/users", { email, pass }).then(
      (res) => {
        const token =
          res.data.token ||
          "9b8hVaH-Rn9PdOwvpxexY2I6UJhpL12ZT1yWmbp0ouhprsV6KHrciwQPUm5/Y2wpjaGhcV75ooCFe-XFuZ1aE8Nd!qWUv3-Ths6rS6jykFssYYm4h0=0VKc!cL/VVuKV";

        // todo: local storage a token kaydet

        localStorage.setItem("token", token);
        dispatch({
          type: "SET_USER_NAME",
          payload: res.data.email,
        });
        dispatch({
          type: "SET_USER_EMAIL",
          payload: res.data.email,
        });

        // todo: geldiği sayfaya geri dön!
        // location.state.referrer
        if (location.state.referrer) {
          history.push(location.state.referrer);
        }
      }
    );
  };

  return (
    <div>
      <h1>Log in</h1>
      <hr />
      <form onSubmit={submitHandler}>
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={emailHandler} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" value={pass} onChange={passHandler} />
          </label>
        </div>
        <Button type="submit">Log in</Button>
      </form>
    </div>
  );
};

export default LoginPage;
