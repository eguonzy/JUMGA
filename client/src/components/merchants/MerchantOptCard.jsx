import React from "react";

function MerchantOptCard({ img, alt, label, history }) {
  const handleClick = () => history.push("/merchant/" + alt);
  return (
    <>
      <div onClick={handleClick} className="merchant-option-card">
        <img src={img} alt={alt} />
        <p>{label}</p>
      </div>
    </>
  );
}

export default MerchantOptCard;
