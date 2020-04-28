import React from "react";

function UserAppsHeader() {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:3000/";
  };
  // const handleClick2 = (e) => {
  //   e.preventDefault();
  //   window.location.href = "http://localhost:3000/interviewentry";
  // };
  return (
    <header style={headerStyle}>
      <div>
        <div style={h1Style}>App Track</div>

        <button style={linkStyle} onClick={handleClick} to={`/applicationform`}>
          Application Form
        </button>
        <br />
        {/* <button style={linkStyle} onClick={handleClick2} to={`/interviewentry`}>
          {" "}
          Interview Information{" "}
        </button> */}
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
