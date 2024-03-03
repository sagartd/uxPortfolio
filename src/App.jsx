import React, { useState } from "react";
import "./App.css";
import About from "./components/about";
import Header from "./components/header";
import Home from "./components/home";
import NotFound from "./components/notFound";
import Project from "./components/project";
import { Routes, Route } from "react-router-dom";
import CaseStudyHome from "./components/case studies/caseStudyHome";

function App() {
  const [projectState, setProjectState] = useState({});

  const getProject = (id, project) => {
    setProjectState({ id, project });
  };

  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project getProject={getProject} />} />
        <Route
          path={`/project/${projectState.id}`}
          element={<CaseStudyHome projectState={projectState} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
