import { useNavigate } from "react-router-dom";
import "./Login.css";
import Button from "../../components/Button";
import NavBar from "../../components/Navbar";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/todos");
  };

  return (
    <>
      <NavBar />
      <div className="login">
        <form>
          <input placeholder="Enter your username" />
          <input placeholder="Enter your password" />
          <Button text="Login" type="submit" onClick={handleClick} />
        </form>
      </div>
    </>
  );
};

export default Login;
