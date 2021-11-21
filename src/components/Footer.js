import React from "react";
import "./Footer.css";

function Footer() {
  // const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
