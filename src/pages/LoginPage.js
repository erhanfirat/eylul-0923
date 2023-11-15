import { Button } from "react-bootstrap";
import useInput from "../hooks/useInput";

const LoginPage = () => {
  const [email, emailHandler] = useInput();
  const [pass, passHandler] = useInput();
  const submitHandler = (e) => {
    e.preventDefault();

    console.log({ email, pass });
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
