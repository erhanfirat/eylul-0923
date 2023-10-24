const Button = ({ children, btnClick }) => {
  return (
    <button className="btn" onClick={btnClick}>
      {children}
    </button>
  );
};

export default Button;
