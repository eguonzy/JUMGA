import React from "react";
import { useDispatch } from "react-redux";
import { authorizeUser } from "../../model/store/userAuth";
import "../../res/css modules/login.scss";
import LoginInput from "../reusables/LoginInput";
import PasswordInput from "../reusables/PasswordInput";
const SignUp = (props) => {
  const [isMember, setIsMember] = React.useState(false);
  const [position, setPosition] = React.useState("");
  const [bankCode, setBankCode] = React.useState("");
  const [data, setData] = React.useState([]);
  const getBanks = async ({ target }) => {
    try {
      const req = await fetch("/banklist/" + target.value);
      const res = await req.json();
      setData(res.data);
    } catch (error) {
      alert(error);
    }
  };
  const dispatch = useDispatch();
  const { onLoad } = props;
  React.useEffect(() => {
    setIsMember(true);
    onLoad("bloop");
    return () => {
      setIsMember("false");
      onLoad("");
    };
  }, [onLoad]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    console.log(event.target.email);
    form.append(
      "fullname",
      event.target.firstname.value + " " + event.target.lastname.value
    );
    form.append("bank_code", bankCode);
    try {
      console.log(form);
      const request = await fetch("/user", {
        body: form,
        method: "POST",
      });
      const response = await request.json();
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
      alert("oops something went wrong");
    }
  };

  const handleBankCode = (code) => setBankCode(code);

  const handlePosition = (e) => {
    setPosition(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div
      className={
        "form_con " + (isMember ? "slide__in__right" : "slide__out__right")
      }
    >
      <form onSubmit={handleSubmit} className="form">
        <div className="input_sex_con">
          <label htmlFor="type">Position</label>
          <select onChange={handlePosition} value={position} name="position">
            <option value="consumer">Consumer</option>
            <option value="merchant">Merchant</option>
          </select>
          {position === "merchant" && (
            <p className="info">A one time charge of $50 is required</p>
          )}
        </div>

        <LoginInput label="Firstname" name="firstname" />
        <LoginInput label="Lastname" name="lastname" />
        {position === "merchant" && (
          <>
            {" "}
            <select onChange={getBanks}>
              <option value="">Select Country</option>
              <option value="GH">Ghana</option>
              <option value="KE">Kenya</option>
              <option value="NG">Nigeria</option>
            </select>
            <LoginInput label="Buisness Name" name="buisness_name" />
            <LoginInput
              label="Bank Name"
              isBank={true}
              data={data}
              name="bank"
              handleBankCode={handleBankCode}
            />
            <LoginInput label="Account Number" name="account_number" />
            <LoginInput label="Buisness Address" name="address" />
          </>
        )}
        <div className="input_container">
          <input className="input" name="date_of_birth" type="date" required />
          <label>Date Of Birth</label>
        </div>
        <div className="input_sex_con">
          <label htmlFor="sex">Sex</label>
          <select name="sex">
            <option value="">Select sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="confused">Confused</option>
          </select>
        </div>

        <LoginInput label="Phone Number" inputMode="tel" name="phone_number" />
        <LoginInput label="Email Address" inputMode="email" name="email" />
        <PasswordInput />

        <input type="submit" className="login_btn" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
