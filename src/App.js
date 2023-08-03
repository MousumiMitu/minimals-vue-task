import { useState } from "react";
import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import Home from "./pages/Home";

function App() {
  const [collapse, setCollapse] = useState(true);
  return (
    <div className="d-flex ">
      <div>
        <SideBar />
      </div>

      <Home />
    </div>
  );
}

export default App;
