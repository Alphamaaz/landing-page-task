import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../images/Frame 9.svg";
import { Menu, X } from "lucide-react"; // import icons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <ul className="menu">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Use Cases</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <button className="cta">Request a quote</button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
