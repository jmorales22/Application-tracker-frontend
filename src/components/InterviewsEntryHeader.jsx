import React from "react";

function Header() {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:3000/applicationform";
  };
  return (
    <header style={headerStyle}>
      <div>
        <div style={h1Style}>App Track</div>
        <button style={linkStyle} onClick={handleClick} to={`/applicationform`}>
          Application Form
        </button>
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
};

export default Header;
