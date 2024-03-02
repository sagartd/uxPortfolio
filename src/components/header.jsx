import "./header.css";
import React, { useState, useEffect, useMemo } from "react";
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

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const memoizedNavLinks = useMemo(() => navLinks, []);

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
              {memoizedNavLinks.map((link) => (
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
