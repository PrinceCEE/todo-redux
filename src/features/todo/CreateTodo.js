import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./CreateTodo.css";
import CloseBtn from "./components/CloseBtn";
import Button from "../../components/Button";
import { useState } from "react";
import { addNewTodo } from "./createTodoSlice";

const CreateTodo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Work");

  return (
    <div className="new-todo">
      <div className="close-btn-container">
        <CloseBtn onClick={() => navigate("/todos")} />
      </div>
      <div className="input-task">
        <input
          placeholder="Enter new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>Choose a Type</p>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Work</option>
          <option>Personal</option>
        </select>
      </div>
      <div>
        <Button
          text="New task"
          type="button"
          icon
          onClick={() => {
            dispatch(addNewTodo({ type, title, isCompleted: false }));
            navigate("/todos");
          }}
        />
      </div>
    </div>
  );
};

export default CreateTodo;
