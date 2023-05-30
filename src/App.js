import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AnnouncementBar from "./components/AnnouncementBar/AnnouncementBar";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <AnnouncementBar />
        <Navbar />
        <div>
          <Routes>
            <Route path="/nomination" exact element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
