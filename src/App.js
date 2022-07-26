import { Toaster } from "react-hot-toast";
import "./App.css";

import { MyRoutes } from "./Pages";
function App() {
  return (
    <div className="App">
      <MyRoutes />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
