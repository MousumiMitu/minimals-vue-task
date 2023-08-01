import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="d-flex ">
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
