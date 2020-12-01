import React from "react";
import "../styles.css";
function LogIn() {
  return (
    <div className="basecontainer">
      <form className="Form">
        {/* <label>Email </label> <br /> */}
        <div className="header">LogIn</div>
        <input type="email" placeholder="email@.com" /> <br />
        <label>Password </label> <br />
        <input type="password" name="password" /> <br />
        <button> login </button>
      </form>
    </div>
  );
}

export default LogIn;
