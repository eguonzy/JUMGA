import React from "react";
import "../../res/css modules/login.scss";
const SignUp = (props) => {
  const [isMember, setIsMember] = React.useState(false);
  const { onLoad } = props;
  React.useEffect(() => {
    setIsMember(true);
    onLoad("bloop");
    return () => {
      setIsMember("false");
      onLoad("");
    };
  }, [onLoad]);
  return (
    <div
      className={
        "form_con " + (isMember ? "slide__in__right" : "slide__out__right")
      }
    >
      <form className="form">
        <div className="input_container">
          <input type="text" name="first_name" required className="input" />
          <label className="label">Firstname</label>
        </div>
        <div className="input_container">
          <input className="input" name="surname" type="text" required />
          <label className="label">Surname</label>
        </div>
        <div className="input_container">
          <input className="input" name="date_of_birth" type="date" required />
          <label>Date Of Birth</label>
        </div>
        <div className="input_sex_con">
          <div className="sex_con">
            {" "}
            <input
              className="chec"
              name="male"
              value="male"
              type="checkbox"
              required
            />
            <label>Male</label>
          </div>
          <div className="sex_con">
            <input
              className=""
              name="female"
              value="female"
              type="checkbox"
              required
            />
            <label>Female</label>
          </div>
        </div>
        <div className="input_container">
          <input
            className="input"
            name="phone_number"
            inputMode="tel"
            required
          />
          <label className="label">Phone Number</label>
        </div>
        <div className="input_container">
          <input
            className="input"
            name="email_address"
            inputMode="email"
            required
          />
          <label className="label">Email Address</label>
        </div>
        <div className="input_container">
          <input className="input" name="company_name" type="text" required />
          <label className="label">Company Name</label>
        </div>
        <div className="input_container">
          <input
            className="input"
            name="company_location"
            type="text"
            required
          />
          <label className="label">Company Location</label>
        </div>
        <input type="submit" className="login_btn" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
