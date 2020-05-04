import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={footer}>
      <p style={para}>
        <Link style={linkStyle} to={`/about`}>
          About
        </Link>
      </p>
    </div>
  );
}

const footer = {
  position: "fixed",
  right: "0",
  bottom: "0",
  left: "0",
  backgroundColor: "#edebe6",
  height: "60px",
};

const linkStyle = {
  background: "#00adb5",
  color: "white",
  border: "3px solid #00adb5",
  borderRadius: "20px",
  outline: "none",
  padding: "6px 6px 6px",
  height: "40px",
  fontSize: "14px",
  fontFamily: "Lato, sans-serif",
  textDecoration: "none",
};

const para = {
  textAlign: "center",
};
export default Footer;
