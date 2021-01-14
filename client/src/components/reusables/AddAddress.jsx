import React, { useState, useRef, useEffect } from "react";
import { STATES } from "../../model/states";
import "../../res/css modules/checkout.scss";
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
  const handleStateOptions = ({ name, locals }) => {
    setStateValue(name);
    setstateOptions([]);
    setLga(locals);
  };
  const handleLgaOptions = (name) => {
    setLgaValue(name);
    setstateOptions([]);
    setLga([]);
    setLgaOptions([]);
  };
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
          <div className="input_con">
            <div className="options_con">
              <input
                name="state"
                value={stateValue}
                autoComplete="off"
                onChange={handleState}
                type="text"
                className="input"
                required
              />
              <div className="suggestions_con">
                {stateOptions.map(({ state }) => (
                  <p
                    onClick={() => handleStateOptions(state)}
                    key={state.id + state.name}
                  >
                    {state.name}
                  </p>
                ))}
              </div>
            </div>
            <label htmlFor="state">State</label>
          </div>
          <div className="input_con">
            <div className="options_con">
              <input
                name="lgs"
                ref={lgaRef}
                value={lgaValue}
                autoComplete="off"
                onChange={handleLga}
                disabled="on"
                type="text"
                required
              />
              <div className="suggestions_con">
                {lgaOptions.map(({ name }) => (
                  <p
                    tabIndex="0"
                    onClick={() => handleLgaOptions(name)}
                    key={name}
                  >
                    {name}
                  </p>
                ))}
              </div>
            </div>
            <label htmlFor="state">L.G.A</label>
          </div>
          <div className="input_con">
            <input name="state" required type="text" />
            <label htmlFor="state">Address #1 </label>
          </div>
          <div className="input_con">
            <input name="state" type="text" />
            <label htmlFor="state">Address #2</label>
          </div>
          <div className="input_con">
            <input name="state" type="text" />
            <label htmlFor="state">LandMarks</label>
          </div>
        </form>
        <div className="next">
          <p>Save</p>
        </div>
      </div>
    </div>
  );
}

export default AddAddress;
