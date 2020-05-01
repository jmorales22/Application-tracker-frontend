import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function Header() {
  return (
    <header style={headerStyle}>
      <div>
        <div style={h1Style}>App Track</div>
        <div style={links}>
          <Link style={HomePage} to={`/applications`}>
            Home Page
          </Link>
          <Link style={signOut}>
            <Logout style={signOut} />
          </Link>
        </div>
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

const links = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  marginRight: "10px",
  paddingBottom: "10px",
};

const HomePage = {
  borderRadius: "10px",
  fontFamily: "Lato, sans-serif",
  fontSize: "14px",
  height: "20px",
  background: "#1c53df",
  border: "solid 2px #1c53df",
  color: "#FFFFFF",
  textDecoration: "none",
  padding: "0px 8px",
  paddingTop: "4px",
  position: "relative",
  marginRight: "5px",
};

const signOut = {
  fontFamily: "Lato, sans-serif",
  fontSize: "14px",
  borderRadius: "10px",
  height: "20px",
  color: "#1c53df",
  background: "none",
  border: "solid 2px #1c53df",
  textDecoration: "none",
  padding: "0px 8px",
  paddingTop: "4px",
  position: "relative",
};

export default Header;
