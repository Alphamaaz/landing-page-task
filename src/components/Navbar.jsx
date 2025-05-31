import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../images/Frame 9.svg";
import { Menu, X } from "lucide-react"; // import icons
import { NavLink, useNavigate } from "react-router-dom";



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="logo"  onClick={()=>{navigate('/')
          toggleMenu()
        }}/>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <ul className="menu">
          <li onClick={()=>toggleMenu()}>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li onClick={()=>toggleMenu()}>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Services
            </NavLink>
          </li>
          <li onClick={()=>toggleMenu()}>
            <NavLink
              to="/use-cases"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Use Cases
            </NavLink>
          </li>
          <li onClick={()=>toggleMenu()}>
            <NavLink
              to="/pricing"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Pricing
            </NavLink>
          </li>
          <li onClick={()=>toggleMenu()}>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Blog
            </NavLink>
          </li>
          <button className="cta">Request a quote</button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
