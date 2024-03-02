import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [error, setError] = useState(null);

  const handleLinkError = (error) => {
    setError("Failed to load projects. Please try again later.");
    console.error("Error loading projects:", error);
  };

  return (
    <div className="home-container">
      <div className="home">
        <div className="home-text-main">
          <div className="home-text-welcome">
            <div className="home-text-wrapper">
              <h1>Hi, I'm SAAGAR</h1>
            </div>
            <div className="home-text-wrapper">
              <h5> UX UI Developer</h5>
            </div>
          </div>

          <div className="home-text-wrapper quot">
            <p>
              “The best design is the one you didn't notice because it works so
              seamlessly.”
            </p>
          </div>
        </div>
        <nav>
          <div className="btn-main">
            <Link to="/project" onError={handleLinkError}>
              <button className="btns">Projects</button>
            </Link>
          </div>
          {error && <p className="error-message">{error}</p>}
        </nav>
      </div>
    </div>
  );
};

export default Home;
