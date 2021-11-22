import { useNavigate } from 'react-router-dom'
import "./CreateTodo.css";
import CloseBtn from "./components/CloseBtn";
import Button from "../../components/Button";

const CreateTodo = () => {
  const navigate = useNavigate();

  return (
    <div className="new-todo">
      <div className="close-btn-container">
        <CloseBtn onClick={() => navigate("/todos")}/>
      </div>
      <div className="input-task">
        <input placeholder="Enter new task" />
        <p>Choose a Type</p>
        <select>
          <option>Business</option>
          <option>Personal</option>
        </select>
      </div>
      <div>
        <Button text="New task" type="button" icon />
      </div>
    </div>
  );
};

export default CreateTodo;
