import React from "react";
import "../styles/contact.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h4>Find us</h4>
        <p>Civil Lines, Ludhiana, Punjab, India</p>
        <h4>Inquiry</h4>
        <p>sakshambhown192</p>
        <p>+91 62847 22026</p>
      </div>

      <form className="contact-form">
        <div className="form-item">
          <div className="form-head">
            Full Name <span id="small">(1/6)</span>
          </div>
          <input type="text" placeholder="Name Surname" />
        </div>

        <div className="form-item">
          <div className="form-head">
            Email Address <span id="small">(2/6)</span>
          </div>
          <input type="email" placeholder="mail@company.com" />
        </div>

        <div className="form-item">
          <div className="form-head">
            Timeline <span id="small">(3/6)</span>
          </div>
          <input type="text" placeholder="2 Weeks" />
        </div>

        <div className="form-item">
          <div className="form-head">
            Budget <span id="small">(4/6)</span>
          </div>
          <input type="text" placeholder="$500, $2,000" />
        </div>

        <div className="checkbox-group">
          <div className="heading">SELECT SERVICES</div>
          <div className="services">
            <input type="checkbox" />
            <span>BRAND STRATEGY</span>
          </div>
          <div className="services">
            <input type="checkbox" />
            <span>WEB DESIGN</span>
          </div>
          <div className="services">
            <input type="checkbox" />
            <span>CONTENT CREATION</span>
          </div>
          <div className="services">
            <input type="checkbox" />
            <span>DIGITAL MARKETING</span>
          </div>
          <div className="services">
            <input type="checkbox" />
            <span>OTHER</span>
          </div>
        </div>

        <div className="form-item">
          <div className="form-head">
            More Information <span id="small">(6/6)</span>
          </div>
          <textarea placeholder="Hello, I'm looking for an agency to help me out with..." />
        </div>

        <button type="submit">Submit Project</button>
      </form>
    </div>
  );
};

export default ContactForm;
