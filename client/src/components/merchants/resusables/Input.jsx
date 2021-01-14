import React, { useState } from "react";

function Input({ type, name, label, id, value, placeholder, info }) {
  const [inputValue, setInputValue] = useState(value);
  const handleInputValue = (e) => setInputValue(e.target.value);
  return (
    <div className="input-con">
      <label>{label}</label>
      <input
        type={type}
        onChange={handleInputValue}
        value={inputValue}
        name={name}
        id={id}
        placeholder={placeholder}
      />
      <p className="info">{info}</p>
    </div>
  );
}

export default Input;
