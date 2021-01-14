import React from "react";
import "../../res/css modules/login.scss";
import login_img from "../../res/images/login.svg";
const LoginPage = (props) => {
  const handlePlaceHolder = () => {};

  const [isMember, setIsMember] = React.useState(true);
  const { onLoad } = props;
  React.useEffect(() => {
    onLoad("login");
    setIsMember(true);
    return () => {
      onLoad("sign");
      setIsMember(false);
    };
  }, [onLoad]);

  return (
    <div
      className={
        "form_con " + (isMember ? "slide__in__left" : "slide__out__left")
      }
    >
      <form action="/mart" className="form">
        <div className="input_container">
          <input
            onFocus={handlePlaceHolder}
            type="text"
            name="user_auth"
            required
            className="input"
          />
          <label className="label">Email/Phone Number</label>
        </div>
        <div className="input_container">
          <input className="input" name="password" type="password" required />
          <label className="label">Password</label>
        </div>
        <div className="btn_con">
          <button className="login_btn">
            {" "}
            <p>Login</p>
            <img src={login_img} className="btn_icon" alt="login" />
          </button>
        </div>
      </form>
      <div className="forgot_password">
        <a href="http://#">Forgot your password?</a>
      </div>
    </div>
  );
};

export default LoginPage;
