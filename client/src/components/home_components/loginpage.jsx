import React from "react";
import "../../res/css modules/login.scss";
import login_img from "../../res/images/login.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authorizeUser } from "../../model/store/userAuth";
const LoginPage = (props) => {
  const handlePlaceHolder = () => {};
  const dispatch = useDispatch();
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    try {
      const request = await axios({
        method: "POST",
        url: "/login",
        data: form,
      });
      const response = await request.data;
      if (request.status === 200) {
        dispatch(
          authorizeUser({
            user: response.user,
            auth: response.blab,
            token: response.token,
          })
        );
        response.user.position === "merchant" &&
          props.history.push("/merchant/home");
        response.user.position === "consumer" && props.history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={
        "form_con " + (isMember ? "slide__in__left" : "slide__out__left")
      }
    >
      <form onSubmit={handleSubmit} action="/mart" className="form">
        <div className="input_container">
          <input
            onFocus={handlePlaceHolder}
            type="text"
            name="email"
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
