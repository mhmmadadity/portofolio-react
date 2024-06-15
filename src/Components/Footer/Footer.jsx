import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/adit (4).png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  const handleSubscribeClick = () => {
    alert("Subscribed successfully!");
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" />
          <p>I am Newbie Frontend Developer from Padang, Indonesia</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe" onClick={handleSubscribeClick}>
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Muhammad Aditya Pratama. All right reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
