import React from "react";

import stand from "../../res/images/stand.svg";
import followers from "../../res/images/followers.svg";

function MerchantStatus(props) {
  return (
    <>
      <div className="merc_profile_con">
        <div className="followers">
          <img src={followers} alt="followers" />
          <p>0</p>
        </div>
        <div className="profile_pic">
          <p>Total Sales</p>
          <p>0</p>
        </div>
        <div className="items">
          <img src={stand} alt="stand" />
          <p>0</p>
        </div>
      </div>
      <div className="merchant-name-con">
        <p className="merchant_name">Stanley And Sons Kiniko ltd</p>
        <p>Idumota Lagos, Nigeria</p>
      </div>
    </>
  );
}

export default MerchantStatus;
