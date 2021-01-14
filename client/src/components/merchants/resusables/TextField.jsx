import React from "react";

function TextField({ label }) {
  return (
    <div className="input-con">
      <label>{label}</label>
      <textarea required name="description" rows="20" cols="1" />
    </div>
  );
}

export default TextField;
