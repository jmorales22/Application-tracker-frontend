import React from "react";
import Logout from "./Logout";
import { Link } from "react-router-dom";

function UserAppsHeader() {
  return (
    <header style={headerStyle}>
      <div>
        <div style={h1Style}>App Track</div>

        <Link style={linkStyle} to={`/applicationform`}>
          Application Form
        </Link>
        <br />
        <Logout />
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
};

export default UserAppsHeader;
