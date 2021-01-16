import React, { useState } from "react";

function LoginInput({ label, name, inputMode, isBank, data }) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [banks, setBanks] = useState([]);
  const handleInput = (e) => setValue(e.target.value);
  const handleBank = (e) => {
    let query = new RegExp(e.target.value);
    let banks = data.filter(({ name }) => name.match(query));
    setBanks(banks);
  };
  return (
    <div className="input_container">
      <input
        type="text"
        name={name}
        required
        className="input"
        value={value}
        onChange={isBank ? handleBank : handleInput}
        inputMode={inputMode}
      />
      <label className="label">{label}</label>
      {isBank && banks.length > 0 && (
        <div className="suggestions">
          {banks.map((bank) => (
            <p key={bank.code}>{bank.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default LoginInput;
