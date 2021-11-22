import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import Button from "../../components/Button";
import NavBar from "../../components/Navbar";
import { useDispatch } from "react-redux";
import { login } from "./authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    if (username.length && password.length) {
      dispatch(
        login({
          username,
          password,
        }),
      );
      navigate("/todos");
    } else {
      alert("Please enter your username, and or password");
    }
  };

  return (
    <>
      <NavBar />
      <div className="login">
        <form>
          <input
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button text="Login" onClick={handleClick} />
        </form>
      </div>
    </>
  );
};

export default Login;
