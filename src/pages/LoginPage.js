import { Button } from "react-bootstrap";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [name, nameHandler] = useInput();
  const [email, emailHandler] = useInput();
  const [pass, passHandler] = useInput();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ email, pass });
    dispatch({
      type: "SET_USER_NAME",
      payload: name,
    });
    dispatch({
      type: "SET_USER_EMAIL",
      payload: email,
    });
  };

  return (
    <div>
      <h1>Log in</h1>
      <hr />
      <form onSubmit={submitHandler}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={nameHandler} />
          </label>
        </div>
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
