import React, { useState, useEffect } from "react";
import myPortfolioData from "../data/data";
import { Link } from "react-router-dom";
import "./project.css";
import Loader from "./loader";

const Project = ({ getProject }) => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    setProjectData(myPortfolioData);
  }, []);

  return (
    <>
      {projectData.length === 0 ? (
        <Loader />
      ) : (
        <div className="project-main">
          <div className="projectCard-container">
            {projectData?.map((elm) => {
              return (
                <div className="projectCard-main" key={elm.id}>
                  <div className="projectCard">
                    <img
                      className="projectCard-img"
                      src={elm.project.thumbnail}
                      alt={elm.project.name}
                    />
                    <div className="cardInfo-main">
                      <div className="cardInfo">
                        <h6>{elm.project.name}</h6>
                      </div>
                      <div className="button-main">
                        <Link to={`/project/${elm.id}`}>
                          <button
                            onClick={() => getProject(elm.id, elm.project)}
                          >
                            <img
                              className="icon-chevron"
                              src="angle-left-solid.svg"
                              alt="right"
                            />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
