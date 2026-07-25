import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/about";
import Services from "./pages/services";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;