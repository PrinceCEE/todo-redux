import "./CreateTodo.css";
import CloseBtn from "./components/CloseBtn";
import Button from "../../components/Button";

const CreateTodo = () => {
  return (
    <div className="new-todo">
      <div className="close-btn-container">
        <CloseBtn />
      </div>
      <div className="input-task">
        <input placeholder="Enter new task" />
      </div>
      <div>
        <Button text="New task" type="button" icon />
      </div>
    </div>
  );
};

export default CreateTodo;
