// import accessibility from "./assets/accessibility.svg";

import "./App.css";
import About from "./components/about";
import Header from "./components/header";
import Home from "./components/home";
import NotFound from "./components/notFound";
import Project from "./components/project";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
