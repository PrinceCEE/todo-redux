import { MdOutlineClose } from "react-icons/md";

const CloseBtn = ({ onClick }) => {
  return (
    <span className="close-btn" onClick={onClick}>
      <MdOutlineClose />
    </span>
  );
};

export default CloseBtn;
