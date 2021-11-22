const TodoList = ({ todo, onClick }) => {
  return (
    <li onClick={onClick}>
      <span className={todo.type.toLowerCase()}></span>
      <span
        style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
    </li>
  );
};

export default TodoList;
