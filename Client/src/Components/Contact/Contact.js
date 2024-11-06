import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:aaryamansarda@gmail.com">
          aaryamansarda@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/aaryaman-sarda-7167b5254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          User Name: Aaryaman Sarda
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/aaryaman-s">
          aaryaman-s
        
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/sakshi.raut04/">
          @sakshi.raut04
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+919545386299">
          +91 9545386299
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
