import React from "react";
import Logout from "./Logout";

function UserAppsHeader() {
  return (
    <header style={headerStyle}>
      <div>
        <div style={h1Style}>App Track</div>
        <div style={links}>
          <div style={signOut}>
            <Logout />
          </div>
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
  color: "#00adb5",
};

const links = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  marginRight: "10px",
  paddingBottom: "10px",
  color: "#00adb5",
};

const signOut = {
  fontFamily: "Lato, sans-serif",
  fontSize: "14px",
  borderRadius: "10px",
  height: "20px",
  color: "#00adb5",
  background: "none",
  border: "solid 2px #00adb5",
  textDecoration: "none",
  padding: "0px 8px",
  paddingTop: "4px",
  position: "relative",
};
export default UserAppsHeader;
