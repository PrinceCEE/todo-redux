import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Todos.css";
import Button from "../../components/Button";
import TodoList from "./components/TodoList";
import NavBar from "../../components/Navbar";
import { toggleTodo, deleteTodo } from "./todoSlice";

const Todos = () => {
  const username = useSelector((state) => state.auth.credentials?.username);
  const todos = useSelector((state) => state.todos);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const personalTasks = todos.filter((task) => task.type === "Personal");
  const workTasks = todos.filter((task) => task.type === "Work");
  return (
    <>
      <NavBar />
      <div className="todos">
        <h2>What's up, {username} !</h2>
        <div className="categories">
          <p>categories</p>
          <div>
            <div className="category work">
              <p>{workTasks.length} tasks</p>
              <p>Work</p>
              <progress
                value={
                  workTasks.filter(({ isCompleted }) => isCompleted).length
                }
                max={workTasks.length}
              />
            </div>
            <div className="category personal">
              <p>{personalTasks.length} tasks</p>
              <p>Personal</p>
              <progress
                value={
                  personalTasks.filter(({ isCompleted }) => isCompleted).length
                }
                max={personalTasks.length}
              />
            </div>
          </div>
        </div>
        <div className="tasks">
          <p>Today's tasks</p>
          <ul>
            {todos.map((todo, index) => (
              <TodoList
                todo={todo}
                key={index}
                onClick={() => {
                  dispatch(toggleTodo({ index }));
                }}
                handleDelete={() => {
                  dispatch(deleteTodo({ index }));
                }}
                handleEdit={() => {
                  navigate(`/create-todo?index=${index}`);
                }}
              />
            ))}
          </ul>
        </div>
        <Button type="button" fab onClick={() => navigate("/create-todo")} />
      </div>
    </>
  );
};

export default Todos;
