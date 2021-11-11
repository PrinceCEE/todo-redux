import { MdAdd, MdOutlineExpandLess } from "react-icons/md";

const Button = ({ text, type, onClick, fab, icon }) => {
  return fab ? (
    <button type={type} onClick={onClick} className="fab">
      <MdAdd />
    </button>
  ) : (
    <button type={type} onClick={onClick}>
      <span>{text}</span>
      {icon && (
        <span className="icon">
          <MdOutlineExpandLess />
        </span>
      )}
    </button>
  );
};

export default Button;
