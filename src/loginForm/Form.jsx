import { useRef } from "react";
import "./style.css";
import svg1 from "../assets/img/undraw_all_the_data_re_hh4w.svg";
import svg2 from "../assets/img/undraw_team_collaboration_re_ow29.svg";
import { SignInForm, SignUpForm } from "./components";

export const LoginForm = () => {
  
  const container = useRef();

  return (
    <div className="container" ref={container}>
      <div className="forms-container">
        <div className="signin-signup">
          <SignInForm />
          <SignUpForm />
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btn transparent"
              onClick={() => {
                container.current.classList.add("sign-up-mode");
              }}
            >
              Sign up
            </button>
          </div>
          <img src={svg1} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="btn transparent"
              onClick={() => {
                container.current.classList.remove("sign-up-mode");
              }}
            >
              Sign in
            </button>
          </div>
          <img src={svg2} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};
