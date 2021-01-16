import React, { useRef, useState } from "react";

function PasswordInput(props) {
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState("");
  const sixRef = useRef(null);
  const numberRef = useRef(null);
  const upperRef = useRef(null);
  const validateRef = useRef(null);
  const iconRef = useRef(null);
  const confirmedRef = useRef(null);
  const handleValidate = (value) => {
    if (value.length > 0) validateRef.current.style.opacity = 1;
    else validateRef.current.style.opacity = 0;
    const isLong = value.length >= 6;
    const isUpper = value.match(/[ABC]/g);
    const hasnumber = value.match(/\d/g);
    if (isLong) sixRef.current.style.color = "green";
    else sixRef.current.style.color = "red";

    if (isUpper) upperRef.current.style.color = "green";
    else upperRef.current.style.color = "red";

    if (hasnumber) numberRef.current.style.color = "green";
    else numberRef.current.style.color = "red";

    if (hasnumber && isLong && isUpper) iconRef.current.style.opacity = 1;
    else iconRef.current.style.opacity = 0;
  };
  const handleInput = (e) => {
    setValue(e.target.value);
    handleValidate(e.target.value);
  };
  const handleConfirm = (e) => {
    setConfirm(e.target.value);
    if (value === e.target.value) {
      confirmedRef.current.style.opacity = 0;
      return;
    }
    confirmedRef.current.style.opacity = 1;
  };
  return (
    <>
      <div className="input_container">
        <p ref={validateRef} className="validate">
          <span ref={sixRef}>
            Password should contain atlease 6 characters,
          </span>
          <span ref={upperRef}>including an uppercase</span>
          <span ref={numberRef}> letter and a number</span>
          <span className="icon" ref={iconRef}>
            {" "}
            <i className="fa fa-check-circle"></i>
          </span>
        </p>
        <input
          className="input"
          name="password"
          type="password"
          value={value}
          onChange={handleInput}
          required
        />
        <label className="label">Password</label>
      </div>
      <div className="input_container">
        <p ref={confirmedRef} className="validate">
          Passwords don't match
        </p>
        <input
          className="input"
          type="password"
          value={confirm}
          onChange={handleConfirm}
          required
        />
        <label className="label">Confirm Password</label>
      </div>
    </>
  );
}

export default PasswordInput;
