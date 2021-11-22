const TodoList = ({ todo }) => {
  return (
    <li>
      <span className={todo.type.toLowerCase()}></span>
      <span>{todo.title}</span>
    </li>
  );
};

export default TodoList;
