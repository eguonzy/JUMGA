import React, { useState } from "react";

function AdddressInput({ mode, label, name }) {
  const [value, setValue] = useState("");
  const handleState = (e) => setValue(e.target.value);
  return (
    <div className="input_con">
      <input
        name={name}
        value={value}
        onChange={handleState}
        inputMode={mode}
        required={false}
      />
      <label htmlFor="state">{label}</label>
    </div>
  );
}

export default AdddressInput;
