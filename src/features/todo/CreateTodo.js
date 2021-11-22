import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./CreateTodo.css";
import CloseBtn from "./components/CloseBtn";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { addNewTodo, editTodo } from "./todoSlice";

const CreateTodo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search] = useSearchParams();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Work");

  let i = search.get("index");
  let index;
  if (i) {
    index = Number(i);
  }

  const isEdit = index >= 0 ? true : false;
  const todos = useSelector((state) => state.todos);

  const handleSetup = () => {
    if (isEdit) {
      setTitle(todos[index].title);
      setType(todos[index].type);
    }
  };
  useEffect(() => {
    handleSetup();
  }, []);

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
            if (isEdit) {
              const { title: editTitle, type: editType } = todos[index];
              if (title !== editTitle || type !== editType) {
                dispatch(editTodo({ title, type, index }));
                navigate("/todos");
              }
              return;
            }
            dispatch(addNewTodo({ type, title, isCompleted: false }));
            navigate("/todos");
          }}
        />
      </div>
    </div>
  );
};

export default CreateTodo;
