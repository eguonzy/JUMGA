import React from "react";
import Input from "./Input";

function DateBox({ expiry_date, manufacture_date }) {
  return (
    <div className="date-box">
      <Input
        type="date"
        label="Manufacturing Date"
        value={manufacture_date}
        name="manufacture_date"
      />
      <Input
        type="date"
        label="Expiration Date"
        value={expiry_date}
        name="expiry_date"
      />
    </div>
  );
}

export default DateBox;
