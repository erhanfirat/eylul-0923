import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const ProtectedPage = ({ children }) => {
  const user = useSelector((store) => store.user);
  const { pathname } = useLocation();

  console.log("şu anki path: ", pathname);

  return user.email ? (
    children
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { referrer: pathname },
      }}
    />
  );
};

export default ProtectedPage;
