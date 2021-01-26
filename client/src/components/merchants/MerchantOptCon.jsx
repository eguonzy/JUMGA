import React from "react";
import MerchantOptCard from "./MerchantOptCard";
import shop from "../../res/images/shop.svg";
import review from "../../res/images/review.svg";
import order from "../../res/images/order.svg";
import sales from "../../res/images/sales.svg";
import { useSelector } from "react-redux";
import axios from "axios";
function MerchantOptCon(props) {
  const { user: merchant, auth } = useSelector((state) => state.auth.userAuth);

  const handlePayment = async () => {
    const request = await axios({
      url: "/shop_charge",
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem(auth) },
    });
    const response = await request.data;
    window.location.href = response;
  };
  return (
    <>
      <div className="merchant-options-con">
        {!merchant.payment_status && (
          <div className="not-paid">
            <div className="not-paid-card">
              <p>Open shop with $50</p>
              <div onClick={handlePayment} className="paynow">
                Pay Now
              </div>
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
