import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";

const TodoList = ({ todo, onClick }) => {
  return (
    <li onClick={onClick}>
      <div className="title">
        <span className={todo.type.toLowerCase()}></span>
        <span
          style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
        >
          {todo.title}
        </span>
      </div>
      <div className="icons">
        <span>
          <MdOutlineModeEditOutline />
        </span>
        <span>
          <MdDeleteOutline />
        </span>
      </div>
    </li>
  );
};

export default TodoList;
