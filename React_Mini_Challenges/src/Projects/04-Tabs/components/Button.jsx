const Button = ({ lable, onClick, active }) => {
  return (
    <>
      <button onClick={onClick} className={active ? "active" : ""}>
        {lable}
      </button>
    </>
  );
};

export default Button;
