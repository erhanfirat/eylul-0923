const Container = ({ children, title }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      <hr />
      {children}
    </div>
  );
};

export default Container;
