import Button from "./Button";

const Container = ({ children, title }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      <hr />
      {children}

      <Button>
        Merhaba!
      </Button>
    </div>
  );
};

export default Container;
