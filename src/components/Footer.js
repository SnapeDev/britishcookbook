// Footer.js
import React from "react";
import "./Footer.css"; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="british-footer">
      <div className="footer-content">
        <p>
          Made with <span className="heart">♥</span> in the UK
        </p>
        <p>© {new Date().getFullYear()} snape Dev.</p>
      </div>
    </footer>
  );
};

export default Footer;
