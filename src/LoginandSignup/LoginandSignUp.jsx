import React, { useState } from "react"
import './LoginandSignUp.css'

const LoginandSignUp = () => {
  const loginsign = {
    login: "Login",
    Signup: "Sign Up",
    btn_signup: "Sign Up",
    btn_login: "Login",
  };
  const [action, SetAction] = useState("login");

 
 

  return (
    <>
      <div className="LoginSignupCss">
        <h2 className="LoginSignupCss2">{action}</h2>
        <div ClassName="">
            <div className="Email ">
          <span>
            <i class="fa-solid fa-envelope"></i>
          </span>
          <input type="email" name="email" value="" className="" placeholder="Email Id" />
        </div>
        <div ClassName="Password">
          <span>
            <i class="fa-solid fa-lock"></i>
          </span>
          <input type="password" name="password" value="" className="" placeholder="Password" />
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div>
            <p>Lost Password? Click here?</p>
          </div>
        )}
          {action === "login" ? (
            <div></div>
          ) : (
            <div className="User">
              <span>
                <i class="fa-solid fa-user"></i>
              </span>
              <input
                type=""
                name=""
                value=""
                className=""
                placeholder="Name"
              />
            </div>
          )}
        </div>
        
           <button
          className={action === "login" ? "Submit gray" : "Submit"}
          onClick={() => SetAction("login")}
        >
          {loginsign.login}
        </button>
        <button
          className={action === "Sign Up" ? "Submit gray" : "Submit"}
          onClick={() => SetAction("Sign Up")}
        >
          {loginsign.btn_signup}
        </button>
       
      </div>
    </>
  );
};
export default LoginandSignUp;