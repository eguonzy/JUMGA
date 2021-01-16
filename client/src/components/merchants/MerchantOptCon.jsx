import React from "react";
import MerchantOptCard from "./MerchantOptCard";
import shop from "../../res/images/shop.svg";
import review from "../../res/images/review.svg";
import order from "../../res/images/order.svg";
import sales from "../../res/images/sales.svg";
import { useSelector } from "react-redux";

function MerchantOptCon(props) {
  const merchant = useSelector((state) => state.auth.userAuth.user);
  console.log(merchant.payment_status);
  return (
    <>
      <div className="merchant-options-con">
        {!merchant.payment_status && (
          <div className="not-paid">
            <div className="not-paid-card">
              <p>Open shop with $50</p>
              <div className="paynow">Pay Now</div>
            </div>
          </div>
        )}

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
