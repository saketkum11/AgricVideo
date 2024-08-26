/* eslint-disable react/prop-types */
const Button = ({ type, label, onClick, ...props }) => {
  return (
    <div>
      <button type={type} onClick={onClick} {...props}>
        {label}
      </button>
    </div>
  );
};

export default Button;
