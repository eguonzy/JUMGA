import React, { useEffect, useState } from "react";
import blue from "../../res/images/Rectangle1.svg";
import logo from "../../res/images/logo1.svg";
import { Route, Link } from "react-router-dom";
import SignupPage from "./signup_page";
import LoginPage from "./loginpage";
import blue_background from "../../res/images/Rectangle2.svg";
import "../../res/css modules/login.scss";
import { useDispatch } from "react-redux";
import { loadingFinished } from "../../model/store/loader";
const HomePage = (props) => {
  const [isMember, setIsMember] = useState(true);
  const dispatch = useDispatch();
  const handleRender = (arrg) => {
    return arrg === "login" ? setIsMember(true) : setIsMember(false);
  };
  useEffect(() => {
    dispatch(loadingFinished());
  });
  return (
    <div className="parent">
      <img
        src={blue}
        className={"blue_background " + (isMember ? "move" : "unmove")}
        alt="complimenting blue banner"
      />
      <img
        src={blue_background}
        className={
          "blue_background " + (isMember ? "move_second" : "unmove__second")
        }
        alt="blue banner"
      />
      <section className="section_one">
        <img
          src={logo}
          alt="logo"
          className="cart_logo"
          aria-label="a cart with a pill in it"
        />
      </section>
      <section className="section_two">
        <div className="login_header">
          <p
            style={{ backgroundColor: isMember ? "InfoBackground" : "#ffffff" }}
            className="line"
          ></p>
          <p className="login_text">
            {" "}
            <Link
              onClick={() => setIsMember(true)}
              style={{ color: isMember ? "InfoBackground" : "#ffffff" }}
              to="/auth/login"
            >
              Login
            </Link>{" "}
            |{" "}
            <Link
              onClick={() => setIsMember(false)}
              style={{ color: !isMember ? "InfoBackground" : "#ffffff" }}
              to="/auth/signup"
            >
              Sign Up
            </Link>
          </p>
          <p
            className="line2"
            style={{
              backgroundColor: !isMember ? "InfoBackground" : "#ffffff",
            }}
          ></p>
        </div>
        <div className="form_con_parent">
          <Route
            path="/auth/login"
            component={() => (
              <LoginPage {...props} member={isMember} onLoad={handleRender} />
            )}
          />

          <Route
            path="/auth/signup"
            component={() => (
              <SignupPage {...props} member={isMember} onLoad={handleRender} />
            )}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
