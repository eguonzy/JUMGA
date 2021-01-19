import React, { useState, useRef, useEffect } from "react";
import { STATES } from "../../model/states";
import "../../res/css modules/checkout.scss";
import AdddressInput from "./AdddressInput";
function AddAddress(props) {
  const [stateValue, setStateValue] = useState("");
  const [lgaValue, setLgaValue] = useState("");
  const [stateOptions, setstateOptions] = useState([]);
  const [lga, setLga] = useState([]);
  const [lgaOptions, setLgaOptions] = useState([]);
  let lgaRef = useRef();
  useEffect(() => {});
  const handleState = ({ target }) => {
    setStateValue(target.value);
    if (target.value) {
      let reg = new RegExp(target.value.toLowerCase());
      lgaRef.current.disabled = false;
      let options = STATES.filter((state) =>
        state.state.name.toLowerCase().match(reg)
      );
      setstateOptions(options);
      return;
    }
    lgaRef.current.disabled = true;
    setstateOptions([]);
  };
  // const handleStateOptions = ({ name, locals }) => {
  //   setStateValue(name);
  //   setstateOptions([]);
  //   setLga(locals);
  // };
  // const handleLgaOptions = (name) => {
  //   setLgaValue(name);
  //   setstateOptions([]);
  //   setLga([]);
  //   setLgaOptions([]);
  // };
  const handleLga = ({ target }) => {
    setLgaValue(target.value);
    if (target.value) {
      let reg = new RegExp(target.value.toLowerCase());
      let options = lga.filter(({ name }) => name.toLowerCase().match(reg));
      setLgaOptions(options);
      return;
    }
    setLgaOptions([]);
  };
  return (
    <div className="checkout_con">
      <div className="checkout_card">
        <form>
          <AdddressInput name="state" label="State" mode="text" />
          <AdddressInput name="town" label="Town" mode="text" />
          <AdddressInput name="phone_number" label="Phone #" mode="tel" />
          <AdddressInput name="adress_1" label="Address #1" mode="text" />
          <AdddressInput name="adress_2" label="Address #2" mode="text" />
          <AdddressInput name="landmarks" label="Landmarks" mode="text" />
        </form>
        <div className="next">
          <p>Save</p>
        </div>
      </div>
    </div>
  );
}

export default AddAddress;
