import React, { useEffect, useState } from "react";

function LoginInput({ label, name, inputMode, isBank, data, handleBankCode }) {
  const [value, setValue] = useState("");
  const [banks, setBanks] = useState(data);
  const handleInput = (e) => setValue(e.target.value);
  const handleBank = (e) => {
    setValue(e.target.value);
    let query = new RegExp(e.target.value, "i");
    if (e.target.value !== "") {
      let banks = data.filter(({ name }) => name.match(query));
      setBanks(banks);
      return;
    }

    setBanks([]);
  };
  useEffect(() => setBanks(data), [data]);
  const handleClear = () => setBanks([]);
  return (
    <div className="input_container">
      <input
        type="text"
        name={name}
        required
        autoComplete="false"
        autoCorrect="no"
        className="input"
        value={value}
        onChange={isBank ? handleBank : handleInput}
        inputMode={inputMode}
      />
      <label className="label">{label}</label>
      {isBank && banks.length > 0 && (
        <div className="suggestions">
          {banks.map((bank) => (
            <p
              onClick={() => {
                setBanks([]);
                setValue(bank.name);
                handleBankCode(bank.code);
              }}
              key={bank.code}
            >
              {bank.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default LoginInput;
