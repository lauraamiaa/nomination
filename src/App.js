import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
