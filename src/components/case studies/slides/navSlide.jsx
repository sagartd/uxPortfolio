import React from "react";
import "./styles/navSlide.css";

const NavSlide = ({ projectSlide, slideNavState }) => {
  return (
    <div className="navSlide-container">
      <div className="navSlide-title-main">
        <div>
          <h2>{projectSlide.navSlideTitle}</h2>
        </div>
      </div>

      <div className="vertical-line-main">
        <div className="vertical-line"></div>
      </div>

      <div className="navSlide-list-main">
        <div className="navSlide-list">
          <ul>
            {projectSlide.navSlideList &&
              projectSlide.navSlideList.map((e) => {
                return (
                  <li key={e.id}>
                    <button onClick={() => slideNavState(e.slidelink)}>
                      {e.slideName}
                      <img
                        className="chevronright1"
                        src={projectSlide.icon}
                        alt="right"
                      />
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavSlide;
