import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function Header() {
  return (
    <header style={headerStyle}>
      <div>
        <div style={h1Style}>App Track</div>
        <Link style={linkStyle} to={`/applications`}>
          Home Page
        </Link>
        <br />
        <Logout style={linkStyle} />
        <br />
      </div>
    </header>
  );
}

const headerStyle = {
  background: "#e6e8ed",
  margin: "0",
};

const h1Style = {
  margin: "0",
  display: "flex",
  flexDirection: "row",
  flexGrow: "0",
  alignItems: "center",
  height: "50px",
  marginLeft: "30px",
  fontSize: "36px",
  fontFamily: "Comfortaa, cursive",
  color: "#68696b",
};
const linkStyle = {
  color: "blue",
  textDecoration: "none",
};

export default Header;
