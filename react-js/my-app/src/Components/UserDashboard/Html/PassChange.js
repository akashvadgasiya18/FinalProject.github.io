import "../css/ChangePassword.css";
// import { Link } from "react-router-dom";
// import { Form } from "react-bootstrap";

function Changepass() {
  return (
    <>
      <div className="mainDiv">
        <div className="cardStyle">
          <form action="" method="post" name="signupForm" id="signupForm">
            {/* <img src="" id="signupLogo"/> */}

            <h2 className="formTitle">Edit Passwords</h2>

            <div className="inputDiv">
              <label className="inputLabel" for="password">
                Old Password
              </label>
              <input type="password" id="password" name="password" required />
            </div>

            <div className="inputDiv">
              <label className="inputLabel" for="password">
                New Password
              </label>
              <input type="password" id="password"  required />
            </div>

            <div className="inputDiv">
              <label className="inputLabel" for="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
            </div>

            <div className="buttonWrapper">
              <button
                type="submit"
                id="submitButton"
                onclick="validateSignupForm()"
                className="submitButton1 pure-button pure-button-primary">
                <span>Continue</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Changepass;
