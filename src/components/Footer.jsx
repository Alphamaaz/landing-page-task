import React from 'react'
import logo from '../images/footer_logo.svg'
import icon1 from '../images/Social icon.svg'
import icon2 from '../images/Social icon (1).svg'
import icon3 from '../images/Social icon (2).svg'
import "../styles/Footer.css"
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer_wrpper">
      <div className="foot_head">
        <div className="foot_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="foot_menu">
          <ul>
            <li>
              <NavLink  to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/use-cases">Use Cases</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
          <div className="social_icons" id="deskt">
            <span>
              <img src={icon1} alt="linkedin" />
            </span>
            <span>
              <img src={icon2} alt="facebook" />
            </span>
            <span>
              <img src={icon3} alt="twitter" />
            </span>
          </div>
        </div>
      </div>

      <div className="middle">
        <div className="foot_address">
          <span className='contact_tag' >Contact Us:</span>
          <p>Email: info@laynova.com</p>
          <p>Phone: 555-567-8901 </p>
          <p>
            {" "}
            Address: 221B Baker Street <br className="desktop-break" />
            London NW1 6XE{" "}
          </p>
        </div>
        <div className="foot_form">
          <form action="#">
            <input type="text" placeholder="Email" />
            <button>Subscribe to news</button>
          </form>
        </div>
        <div className="social_icons mob">
          <span>
            <img src={icon1} alt="linkedin" />
          </span>
          <span>
            <img src={icon2} alt="facebook" />
          </span>
          <span>
            <img src={icon3} alt="twitter" />
          </span>
        </div>
      </div>

      <div className="footer_divider"></div>

      <div className="footer_bottom">
        <div className="copy_right">
          <p>© 2025 Laynova. All Rights Reserved. </p>
          <p>Privacy Policy</p>
        </div>
        <div className="lang">
          <div className="custom_select_wrapper">
            <select name="language" id="language" className="custom_select">
              <option value="English">Eng</option>
              <option value="Urdu">Urdu</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer