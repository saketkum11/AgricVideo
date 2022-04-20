import "./App.css";
import logo from "./logo.png";
import { Route, Routes } from "react-router-dom";
import { Home } from "./index";
function App() {
  return (
    <div className="App">
      <header className="">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
