import { useNavigate } from "react-router-dom";
import "./Todos.css";
import Button from "../../components/Button";
import TodoList from "./components/TodoList";
import NavBar from "../../components/Navbar";

const Todos = () => {
  const navigate = useNavigate();
  const todos = [
    "Daily meeting with team",
    "Pay for rent",
    "Check emails",
    "Lunch with Emma",
    "Meditation",
  ];

  return (
    <>
      <NavBar />
      <div className="todos">
        <h2>What's up, Joy!</h2>
        <div className="categories">
          <p>categories</p>
          <div>
            <div className="category work">
              <p>40 tasks</p>
              <p>Work</p>
              <progress value="70" max="100" />
            </div>
            <div className="category personal">
              <p>40 tasks</p>
              <p>Personal</p>
              <progress value="70" max="100" />
            </div>
          </div>
        </div>
        <div className="tasks">
          <p>Today's tasks</p>
          <ul>
            {todos.map((todo, index) => (
              <TodoList todo={todo} key={index} />
            ))}
          </ul>
        </div>
        <Button type="button" fab onClick={() => navigate("/create-todo")} />
      </div>
    </>
  );
};

export default Todos;
