import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";

const TodoList = ({ todo, onClick, handleDelete, handleEdit }) => {
  return (
    <li>
      <div className="title" onClick={onClick}>
        <span className={todo.type.toLowerCase()}></span>
        <span
          style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
        >
          {todo.title}
        </span>
      </div>
      <div className="icons">
        <span onClick={handleEdit}>
          <MdOutlineModeEditOutline />
        </span>
        <span onClick={handleDelete}>
          <MdDeleteOutline />
        </span>
      </div>
    </li>
  );
};

export default TodoList;
