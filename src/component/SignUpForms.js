import React from "react";
import "../styles.css";
function SignUp() {
  return (
    <div className="count">
      <form className="Form">
        <div className="header">SignUp</div>
        <label>UserName </label> <br />
        <input type="UserName" placeholder="Victory263" /> <br />
        <label>Password </label> <br />
        <input type="password" name="password" /> <br />
        <label>RepeatPassword </label> <br />
        <input type="Repeat password" placeholder="..........." /> <br />
        <button>SignUp </button>
        <br />
      </form>
    </div>
  );
}

export default SignUp;
