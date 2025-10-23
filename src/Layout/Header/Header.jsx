import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header_container">
      <h3>
        <Link className="logo" to={""}>
          I.M.A
        </Link>
      </h3>

      <button
        className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        className={`header_container_navigation ${isMenuOpen ? "active" : ""}`}
      >
        <ul>
          <li>
            <Link
              className="about_link"
              to="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className="services_link"
              to="/services"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="contacts_link"
              to="/contacts"
              onClick={() => setIsMenuOpen(false)}
            >
              Consultations
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
