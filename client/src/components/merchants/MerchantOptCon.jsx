import React from "react";
import MerchantOptCard from "./MerchantOptCard";
import shop from "../../res/images/shop.svg";
import review from "../../res/images/review.svg";
import order from "../../res/images/order.svg";
import sales from "../../res/images/sales.svg";

function MerchantOptCon(props) {
  return (
    <>
      <div className="merchant-options-con">
        <MerchantOptCard {...props} img={shop} label="Shop" alt="shop" />
        <MerchantOptCard {...props} img={order} label="Orders" alt="orders" />
        <MerchantOptCard {...props} img={sales} label="Sales" alt="sales" />
        <MerchantOptCard
          {...props}
          img={review}
          label="Reviews"
          alt="reviews"
        />
      </div>
    </>
  );
}

export default MerchantOptCon;
