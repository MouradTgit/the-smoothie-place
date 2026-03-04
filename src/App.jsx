import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Details from "./pages/Details";
import Builder from "./pages/Builder";
import About from "./pages/About";
import Created from "./pages/Created";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<Details />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/created" element={<Created />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;