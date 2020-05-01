import React from "react";
import { Link } from "react-router-dom";

function Header() {

  return (
    <header style={headerStyle}>
      <div>
        <div style={h1Style}>AppTrack</div>
        <div style={buttons}>
          <Link style={home} to="/">
            Home
          </Link>
          <Link style={login} to="/login">
            Login
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

const buttons = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  marginRight: "10px",
  paddingBottom: "10px",
};

const home = {
  borderRadius: "10px",
  fontFamily: "Lato, sans-serif",
  fontSize: "14px",
  height: "20px",
  background: "none",
  border: "solid 2px #1c53df",
  color: "#1c53df",
  textDecoration: "none",
  padding: "0px 8px",
  paddingTop: "4px",
  position: "relative",
  marginRight: "5px",
};

const login = {
  fontFamily: "Lato, sans-serif",
  fontSize: "14px",
  borderRadius: "10px",
  height: "20px",
  color: "white",
  backgroundColor: "#1c53df",
  border: "solid 2px #1c53df",
  textDecoration: "none",
  padding: "0px 8px",
  paddingTop: "4px",
  position: "relative",
};

export default Header;
