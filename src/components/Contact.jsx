import React, { useState } from "react";
import CommonHead from "./CommonHead";
import "../styles/Contact.css";
import contact_illustration from "../images/contact_ill.png";

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("hi");

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
          <div className="form-container">
            <form action="">
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="option"
                    value="hi"
                    checked={selectedOption === "hi"}
                    onChange={() => setSelectedOption("hi")}
                  />
                  Say Hi
                </label>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value="quote"
                    checked={selectedOption === "quote"}
                    onChange={() => setSelectedOption("quote")}
                  />
                  Get a Quote
                </label>
              </div>

              {selectedOption === "hi" ? (
                <>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Name" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email<span className="required">*</span>
                    </label>
                    <input type="email" id="email" placeholder="Email" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Message<span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </>
              ) : (
                <div className="quote-container">
                  <blockquote className="inspirational-quote">
                    <p>
                      "Success is not final, failure is not fatal: It is the
                      courage to continue that counts."
                    </p>
                    <footer>— Winston Churchill</footer>
                  </blockquote>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="contact_right">
          <img src={contact_illustration} alt="Contact illustration" />
        </div>
      </div>
    </>
  );
};

export default Contact;
