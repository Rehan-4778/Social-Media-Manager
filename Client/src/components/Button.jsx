const Button = ({ children }) => {
  return (
    <div className="button">
      <button className="button-text">{children}</button>
    </div>
  );
};

export default Button;
