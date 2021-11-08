import Routes from "./app/routes";
import NavBar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div id="App">
      <NavBar />
      <Routes />
    </div>
  );
};

export default App;
