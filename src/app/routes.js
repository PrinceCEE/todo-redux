import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Login from "../features/auth/Login";
import Todos from "../features/todo/Todos";
import CreateTodo from "../features/todo/CreateTodo";

const Routes = function () {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/create-todo" element={<CreateTodo />} />
      </Switch>
    </Router>
  );
};

export default Routes;
