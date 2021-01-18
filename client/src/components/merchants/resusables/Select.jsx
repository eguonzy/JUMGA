import React from "react";

function Select({ label, name, options, value, onChange, arrg }) {
  return (
    <div className="input-con">
      <label>{label}</label>
      <select
        onChange={(e) => onChange(arrg, e.target.value)}
        value={value}
        name={name}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
