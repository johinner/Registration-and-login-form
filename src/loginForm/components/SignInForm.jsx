import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";

export const SignInForm = () => {
  const dispatch = useDispatch();

  const { username, password, onInputChange } = useForm({
    username: "johinnerMC",
    password: "123456",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    console.log({ username, password });
    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <form onSubmit={onSubmit} className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
      </div>
      <input type="submit" value="Login" className="btn solid" />
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" onClick={onGoogleSignIn} className="social-icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  );
};
