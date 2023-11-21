import { useSelector } from "react-redux";

const UserPage = () => {
  const { name, email } = useSelector((store) => store.user);

  return (
    <div>
      <h1>User Page</h1>
      <hr />
      <p>Hoşgeldin {name}</p>
      {email && (
        <p>
          {email} adresini doğrulamak için <a href="#">tıkla</a>
        </p>
      )}
    </div>
  );
};

export default UserPage;
