import React, { useState } from "react";
import Select from "./Select";

function CategoryInput(props) {
  const [secondary, setSecondary] = useState("");
  const [primary, setPrimary] = useState("");
  const [showSecondary, setShowSecondary] = useState(false);
  const [secOptions, setSecOptions] = useState([]);
  const handleCategory = () => {};
  const handleState = (arrg, value) => {
    console.log(value);
    switch (arrg) {
      case 1:
        setPrimary(value);
        if (value === "Electronics") {
          setSecOptions(["Games", "Mobile Phones", "Computers"]);
          setShowSecondary(true);
        }
        if (value === "Clothes") {
          setSecOptions(["Children", "Women", "Men"]);
          setShowSecondary(true);
        }
        if (value === "Computers") {
          setSecOptions(["Desktop", "Laptop", "Tablet"]);
          setShowSecondary(true);
        }

        break;
      case 0:
        setSecondary(value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Select
        name="primary_category"
        label="Primary Category"
        value={primary}
        arrg={1}
        onChange={handleState}
        options={["Select Category", "Clothes", "Computers", "Electronics"]}
      />

      {showSecondary && (
        <Select
          name="secondary_category"
          label="Secondary Category"
          value={secondary}
          arrg={0}
          onChange={handleState}
          options={secOptions}
        />
      )}
    </div>
  );
}

export default CategoryInput;
