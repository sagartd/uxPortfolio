import "./header.css";

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    id: 1,
    label: "Home",
    path: "/",
    icon: "house.svg",
  },
  {
    id: 2,
    label: "Project",
    path: "/project",
    icon: "case-study-icon.svg",
  },
  {
    id: 3,
    label: "About",
    path: "/about",
    icon: "about-me-icon.svg",
  },
];

const Header = () => {
  const [width, setWidth] = useState(() => window.innerWidth || 0);
  //window width if available, or with 0 if it's running on the server.
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header-container">
      <header>
        <div className="logo-main">
          <div className="logo">
            <img src="brand.svg" alt="Logo of the website" />
          </div>
        </div>
        <div className="nav-main">
          <nav>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  {width < 785 ? (
                    <NavLink to={link.path}>
                      <img src={link.icon} alt={link.label} />
                    </NavLink>
                  ) : (
                    <NavLink to={link.path}>{link.label}</NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
