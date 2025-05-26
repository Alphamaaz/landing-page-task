import React from "react";
import CommonHead from "./CommonHead";
import "../styles/Contact.css";
import contact_illustration from '../images/contact_ill.png'
const Contact = () => {
  return (
    <>
      <CommonHead
        title={"Contact Us"}
        description={
          <>
            Contact Us Connect with Us: Let's Discuss Your <br />
            Digital Marketing Needs
          </>
        }
      />

      <div className="contact_wrapper">
        <div className="contact_left">
          <div class="form-container">
            <div class="radio-group">
              <label>
                <input type="radio" name="option" checked />
                Say Hi
              </label>
              <label>
                <input type="radio" name="option" />
                Get a Quote
              </label>
            </div>

            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" placeholder="Name" />
            </div>

            <div class="form-group">
              <label for="email">
                Email<span class="required">*</span>
              </label>
              <input type="email" id="email" placeholder="Email" />
            </div>

            <div class="form-group">
              <label for="message">
                Message<span class="required">*</span>
              </label>
              <textarea id="message" rows="5" placeholder="Message"></textarea>
            </div>

            <button type="submit" class="submit-btn">
              Send Message
            </button>
          </div>
        </div>
        <div className="contact_right">
            <img src={contact_illustration} alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
