import React from "react";

var Navbar = (props) => {
  let navItemStyle = {
    height: "100%",
    marginRight: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "15px",
  };
  return (
    <div>
      <div
        style={{
          height: "50px",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          backgroundColor: "#222",
          color: "white",
          fontSize: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ marginLeft: "10px" }} onClick={()=>props.turnFalse("quizCreate")}>Quiz Application</h1>
        {!props.username && (
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div style={navItemStyle} onClick={()=>props.turnTrue("signUp")}>SignUP</div>
            <div style={navItemStyle} onClick={props.login}>Login</div>
          </div>
        )}
        {props.username && (
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div style={navItemStyle}>Welcome {props.username}</div>
            <div style={navItemStyle} onClick={()=>props.turnTrue("quizCreate")}>Create Quiz</div>
            <div style={navItemStyle} onClick={props.changeState}>Logout</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
